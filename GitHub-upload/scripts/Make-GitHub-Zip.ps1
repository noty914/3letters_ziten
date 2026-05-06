$ErrorActionPreference = 'Stop'
$ProjectRoot = Split-Path $PSScriptRoot -Parent
$in = Join-Path $ProjectRoot 'GitHubUpload'
$zip = Join-Path $ProjectRoot 'GitHub-upload.zip'
if (-not (Test-Path -LiteralPath $in)) {
  throw 'GitHubUpload not found. Run Prepare-GitHubUpload.ps1 first.'
}
if (Test-Path -LiteralPath $zip) {
  Remove-Item -LiteralPath $zip -Force
}
$paths = @(Get-ChildItem -LiteralPath $in -Force | ForEach-Object { $_.FullName })
if ($paths.Count -eq 0) {
  throw 'GitHubUpload is empty.'
}
Compress-Archive -LiteralPath $paths -DestinationPath $zip -Force
Write-Host ('Created: ' + $zip)
