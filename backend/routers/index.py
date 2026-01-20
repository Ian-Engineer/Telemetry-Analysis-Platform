from fastapi import APIRouter
from missions import missions

api_router = APIRouter()
api_router.include_router(missions.router)
