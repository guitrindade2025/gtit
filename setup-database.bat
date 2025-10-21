@echo off
echo "========================================================"
echo "Setting up PostgreSQL for Site Institucional GTIT Project"
echo "========================================================"

REM Check if PostgreSQL is installed
where psql >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo PostgreSQL is not installed or not in PATH.
    echo Please download and install PostgreSQL from:
    echo https://www.postgresql.org/download/windows/
    echo.
    echo After installation, add the PostgreSQL bin directory to your PATH.
    echo For example: C:\Program Files\PostgreSQL\14\bin
    pause
    exit /b 1
)

REM Variables for database setup
set DB_NAME=site_institucional
set DB_USER=postgres
set DB_PASSWORD=postgres

echo Creating database %DB_NAME%...
psql -U postgres -c "CREATE DATABASE %DB_NAME% WITH ENCODING='UTF8';"
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Failed to create database. If you already created it, you can ignore this error.
    echo Otherwise, please check your PostgreSQL installation.
)

echo Database setup complete!
echo.
echo You can now start the Spring Boot application.
echo The application is configured to connect to:
echo   - Database: %DB_NAME%
echo   - Username: %DB_USER%
echo   - Password: %DB_PASSWORD%
echo.
echo Make sure to update these values in application.properties if needed.
pause
