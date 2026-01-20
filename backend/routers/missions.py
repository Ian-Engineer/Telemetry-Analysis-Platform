from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from services.missions_service import create_mission

router = APIRouter(prefix="/missions", tags=["missions"])

@router.post("/upload")
async def create_mission_route(
    payload: MissionCreate,
    db: AsyncSession = Depends(get_db),
):
    return await create_mission(payload, db)

