from fastapi import FastAPI, Depeneds, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from ..database import models, schemas, database

app = FastAPI()

app.include_router(api_router)

@app.get("/health")
async def root():
    return {"message": "healthy"}
