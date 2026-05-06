<#
  GitHub Upload 用に GitHubUpload フォルダへ必要ファイルを集約します。
  .github はこのスクリプトが生成するので、エクスプローラで見えなくても問題ありません。

  使い方（プロジェクトのルートで）:
    powershell -ExecutionPolicy Bypass -File .\scripts\Prepare-GitHubUpload.ps1

  その後:
    GitHubUpload 内の全アイテムを ZIP のルート相当にして GitHub へ Upload
#>
$ErrorActionPreference = 'Stop'
# このファイルは <プロジェクト>\scripts\ に置く
$ProjectRoot = Split-Path $PSScriptRoot -Parent
if (-not (Test-Path (Join-Path $ProjectRoot 'package.json'))) {
  throw ('package.json not found under: ' + $ProjectRoot)
}
$OutRoot = Join-Path $ProjectRoot 'GitHubUpload'
$WorkflowSource = Join-Path $ProjectRoot 'deploy\github-pages-deploy.yml'
$WorkflowDestDir = Join-Path $OutRoot '.github\workflows'
$WorkflowDest = Join-Path $WorkflowDestDir 'deploy.yml'
$DotGithubLocal = Join-Path $ProjectRoot '.github\workflows\deploy.yml'

Write-Host ('Project root: ' + $ProjectRoot)
Write-Host ('Output:       ' + $OutRoot)

if (-not (Test-Path $WorkflowSource)) {
  throw ('Workflow template missing: ' + $WorkflowSource)
}

if (Test-Path $OutRoot) {
  Set-Location -LiteralPath $ProjectRoot
  Remove-Item -LiteralPath $OutRoot -Recurse -Force
}
New-Item -ItemType Directory -Path $WorkflowDestDir -Force | Out-Null

function Copy-IfExists($relative) {
  $src = Join-Path $ProjectRoot $relative
  if (Test-Path $src) {
    $dest = Join-Path $OutRoot $relative
    $destParent = Split-Path $dest -Parent
    if (-not (Test-Path $destParent)) {
      New-Item -ItemType Directory -Path $destParent -Force | Out-Null
    }
    Copy-Item $src $dest -Recurse -Force
    Write-Host ('  OK ' + $relative)
  } else {
    Write-Host ('  SKIP ' + $relative)
  }
}

Copy-IfExists 'package.json'
Copy-IfExists 'package-lock.json'
Copy-IfExists 'astro.config.mjs'
Copy-IfExists 'tsconfig.json'
Copy-IfExists '.gitignore'
Copy-IfExists 'src'
Copy-IfExists 'data'
Copy-IfExists 'public'
Copy-IfExists 'deploy'
Copy-IfExists 'scripts'
Copy-IfExists 'GITHUB-UPLOAD.txt'
Copy-IfExists 'Run-GitHubUpload.bat'

$uploadTxt = Join-Path $ProjectRoot 'deploy\UPLOAD.txt'
if (Test-Path $uploadTxt) {
  Copy-Item $uploadTxt (Join-Path $OutRoot 'UPLOAD.txt') -Force
  Write-Host '  OK UPLOAD.txt (from deploy/)'
}

Copy-Item $WorkflowSource $WorkflowDest -Force
Write-Host '  OK .github/workflows/deploy.yml (from deploy/)'

# ローカルで git を使う人向け: 正本から .github も同期
$LocalWorkflowDir = Join-Path $ProjectRoot '.github\workflows'
if (-not (Test-Path $LocalWorkflowDir)) {
  New-Item -ItemType Directory -Path $LocalWorkflowDir -Force | Out-Null
}
Copy-Item $WorkflowSource $DotGithubLocal -Force
Write-Host '  OK .github/workflows/deploy.yml (local sync)'

Set-Location -LiteralPath $ProjectRoot
Write-Host ''
Write-Host 'Done. Zip the contents of GitHubUpload and upload to GitHub.'
