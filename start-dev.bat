@echo off
echo "=================================================="
echo "Starting GTIT Institutional Website Development Environment"
echo "=================================================="

echo.
echo "Starting PostgreSQL database..."
call setup-database.bat

echo.
echo "Starting Spring Boot Backend (on port 8080)..."
start cmd /k "cd backend && mvn spring-boot:run"

echo.
echo "Starting React Frontend (on port 5173 or next available)..."
start cmd /k "cd frontend && npm run dev"

echo.
echo "Development environment is now running!"
echo "- Backend: http://localhost:8080"
echo "- Frontend: Check terminal for URL (typically http://localhost:5173)"
echo.
echo "Press any key to stop all services..."
pause

echo.
echo "Shutting down services..."
taskkill /f /im java.exe
taskkill /f /im node.exe
echo "All services stopped."
pause
