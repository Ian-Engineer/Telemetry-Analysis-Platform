from database.database import AsyncSessionLocal
from database.models import Mission, Spacecraft, Subsystem, Sensor, Role, User
import asyncio
import random

roles = ["Admin", "Engineer", "Viewer"]

async def seed():
    async with AsyncSessionLocal() as session:
        for name in roles:
            existing = await session.execute(select(Role).where(Role.name == name))
            if not existing.scalar():
                session.add(Role(name=name))
        
        existing = await session.execute(
            select(Mission).where(Mission.name == "Lunar Test")
        )
        if existing.scalar():
            return

        mission = Mission(name="Lunar Test", status="active")
        session.add(mission)
        await session.flush()  # gets mission.id

        spacecraft = Spacecraft(name="Test Lander", mission_id=mission.id)
        session.add(spacecraft)
        await session.flush()

        subsystem = Subsystem(name="Power", spacecraft_id=spacecraft.id)
        session.add(subsystem)
        await session.flush()

        sensor = Sensor(name="battery_voltage", unit="V", subsystem_id=subsystem.id)
        session.add(sensor)
        await session.flush()

        now = datetime.utcnow()

        for i in range(1000):
            point = TelemetryPoint(
                sensor_id=sensor.id,
                timestamp=now - timedelta(minutes=i),
                value=12.0 + random.uniform(-0.5, 0.5),
                quality_flag="good"
            )
            session.add(point)
        await session.commit()

if __name__ == "__main__":
    asyncio.run(seed())
