from fastapi import FastAPI
from backend.routers.missions import router as missions_router

app = FastAPI()
app.include_router(missions_router, prefix="/missions", tags=["missions"])

@app.get("/health")
async def root():
    return { "message": "healthy" }
