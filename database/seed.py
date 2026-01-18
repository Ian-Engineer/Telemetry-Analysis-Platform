from database.database import AsyncSessionLocal
from database.models import Mission, Spacecraft, Subsystem, Sensor, Role, User
import asyncio

async def seed():
    async with AsyncSessionLocal() as session:
        # insert here
        await session.commit()

if __name__ == "__main__":
    asyncio.run(seed())
