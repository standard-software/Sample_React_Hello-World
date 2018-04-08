@REM ƒtƒHƒ‹ƒ_‚ª‚È‚¯‚ê‚Îì‚é
IF NOT EXIST ".\build\" (
  mkdir .\build
)
.\node_modules\.bin\browserify -t reactify .\src\index.jsx -o .\build\build.js
