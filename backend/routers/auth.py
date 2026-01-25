from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from app.schemas.user import UserCreate, UserLogin, UserOut
from app.services.auth_service import register_user, login_user

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register", response_model=UserOut)
async def register(
    payload: UserCreate,
    db: AsyncSession = Depends(get_db),
):
    return await register_user(payload, db)

@router.post("/login")
async def login(
    payload: UserLogin,
    db: AsyncSession = Depends(get_db),
):
    return await login_user(payload, db)
