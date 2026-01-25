from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
# from services.missions_service import create_mission
from database.database import get_db
from database.models import Mission
from backend.schemas.mission import MissionOut
from sqlalchemy import select

router = APIRouter()

# @router.post("/upload")
# async def create_mission_route(
#     payload: MissionCreate,
#     db: AsyncSession = Depends(get_db),
# ):
#     return await create_mission(payload, db)


@router.get("/", response_model=list[MissionOut])
async def list_missions(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Mission))
    missions = result.scalars().all()
    return missions