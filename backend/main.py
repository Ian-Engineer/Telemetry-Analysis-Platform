from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routers.missions import router as missions_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Vite / React
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(missions_router, prefix="/missions", tags=["missions"])

@app.get("/health")
async def root():
    return { "message": "healthy" }
