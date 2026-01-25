from fastapi import HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.user import UserCreate, UserLogin
from app.db import crud
from app.db.models import User
from app.core.security import hash_password, verify_password, create_access_token

async def register_user(payload: UserCreate, db: AsyncSession):
    existing = await crud.get_user_by_email(db, payload.email)
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    user = User(
        email=payload.email,
        hashed_password=hash_password(payload.password),
    )
    return await crud.create_user(db, user)

async def login_user(payload: UserLogin, db: AsyncSession):
    user = await crud.get_user_by_email(db, payload.email)
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": str(user.id)})
    return {"access_token": token, "token_type": "bearer"}
