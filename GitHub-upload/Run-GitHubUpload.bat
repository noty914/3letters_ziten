@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo [1/2] GitHubUpload フォルダを作成...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\Prepare-GitHubUpload.ps1"
if errorlevel 1 (
  echo 失敗しました。
  pause
  exit /b 1
)

echo [2/2] ZIP を作成...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\Make-GitHub-Zip.ps1"
if errorlevel 1 (
  echo ZIP 作成に失敗しました。
  pause
  exit /b 1
)

echo.
echo 完了: %~dp0GitHub-upload.zip
echo この ZIP を GitHub にアップロードしてください。
pause
