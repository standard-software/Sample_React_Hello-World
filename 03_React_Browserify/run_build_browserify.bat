@REM ƒtƒHƒ‹ƒ_‚ª‚È‚¯‚ê‚Îì‚é
IF NOT EXIST ".\build\" (
  mkdir .\build
)
.\node_modules\.bin\browserify .\src\index.js -o .\build\build.js