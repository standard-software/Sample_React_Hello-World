@REM フォルダがなければ作る
IF NOT EXIST ".\build\" (
  mkdir .\build
)
.\node_modules\.bin\browserify -t reactify .\src\index.js -o .\build\build.js
