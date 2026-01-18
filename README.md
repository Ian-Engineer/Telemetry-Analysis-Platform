# Telemetry Analysis Platform

## 🚀 Getting Started

This project uses Docker Compose to run all services locally:

-   FastAPI backend\
-   React frontend\
-   PostgreSQL database

------------------------------------------------------------------------

## Prerequisites

Make sure you have:

-   Docker Desktop (or Docker Engine + Compose)\
-   Git

Verify installation:

``` bash
docker --version
docker compose version
```

------------------------------------------------------------------------

## 🧩 Project Structure

``` text
.
├── backend/     # FastAPI backend
├── frontend/    # React frontend
├── database/    # Optional scripts / seeds
└── docker-compose.yml
```

------------------------------------------------------------------------

## ▶️ Run the App Locally

From the project root:

``` bash
docker compose up --build
```

This will:

-   Build backend and frontend images\
-   Start PostgreSQL\
-   Start the API and UI

First run may take a few minutes.

------------------------------------------------------------------------

## 🌐 Access the Services

  Service    URL
  ---------- ------------------------------
  Frontend   http://localhost
  Backend    http://localhost:8000
  Health     http://localhost:8000/health
  Postgres   localhost:5432

------------------------------------------------------------------------

## 🔐 Database Connection

Postgres runs in Docker:

``` text
Host: localhost  
Port: 5432  
Database: telemetry  
User: postgres  
Password: postgres  
```

Backend uses:

``` env
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/telemetry
```

------------------------------------------------------------------------

## 🗄 Database Migrations (Alembic)

This project uses Alembic to manage database schema changes.

# Run Migrations
After starting Postgres with Docker:
```alembic upgrade head```

This will:
- Create all tables
- Apply the latest schema

# When you change models
If you modify SQLAlchemy models:
```
alembic revision --autogenerate -m "describe change"
alembic upgrade head
```

------------------------------------------------------------------------

## 🛑 Stop the App

``` bash
docker compose down
```

To stop and delete data:

``` bash
docker compose down -v
```

------------------------------------------------------------------------

## 🧪 Debugging

Check running containers:

``` bash
docker ps
```

View logs:

``` bash
docker compose logs backend
docker compose logs frontend
docker compose logs postgres
```

Enter backend container:

``` bash
docker compose run backend sh
```

Inside container:

``` bash
ls  
python -c "import main"  
```

------------------------------------------------------------------------

## 🧹 Reset Everything

``` bash
docker compose down -v  
docker compose build --no-cache  
docker compose up  
```

------------------------------------------------------------------------

## ✅ Quick Health Check

``` bash
curl http://localhost:8000/health
```

Expected response:

``` json
{"message":"healthy"}
```
