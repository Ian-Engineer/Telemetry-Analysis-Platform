from fastapi import FastAPI, Depeneds, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from ..database import models, schemas, database

app = FastAPI()

# Define a path operation decorator for the root URL ("/") with a GET method
@app.get("/health")
# Define the path operation function
async def root():
    return {"message": "healthy"}
