from sqlalchemy import (
    String, Integer, Float, DateTime, Boolean, ForeignKey, JSON, Index, Table, Column, ForeignKey
)
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime
from database.database import Base


class Mission(Base):
    __tablename__ = "missions"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String, nullable=False)
    description: Mapped[str | None] = mapped_column(String)
    status: Mapped[str] = mapped_column(String)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    start_date: Mapped[datetime] = mapped_column(DateTime)
    end_date: Mapped[datetime | None] = mapped_column(DateTime)

class Spacecraft(Base):
    __tablename__ = "spacecraft"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    mission_id: Mapped[int] = mapped_column(ForeignKey("missions.id"))
    name: Mapped[str] = mapped_column(String)
    type: Mapped[str] = mapped_column(String)

class Subsystem(Base):
    __tablename__ = "subsystems"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    spacecraft_id: Mapped[int] = mapped_column(ForeignKey("spacecraft.id"))
    name: Mapped[str] = mapped_column(String)
    description: Mapped[str] = mapped_column(String)
    created_at: Mapped[str] = mapped_column(String)

class Sensor(Base):
    __tablename__ = "sensors"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    subsystem_id: Mapped[int] = mapped_column(ForeignKey("subsystems.id"))
    name: Mapped[str] = mapped_column(String)
    metric_type: Mapped[str] = mapped_column(String)
    unit: Mapped[str] = mapped_column(String)
    min_expected: Mapped[float] = mapped_column(Integer)
    max_expected: Mapped[float] = mapped_column(Integer)
    created_at: Mapped[str] = mapped_column(String)

class TelemetryPoint(Base):
    __tablename__ = "telemetry_points"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    sensor_id: Mapped[int] = mapped_column(ForeignKey("sensors.id"))
    timestamp: Mapped[datetime] = mapped_column(DateTime, index=True)
    value: Mapped[float] = mapped_column(Float)
    quality_flag: Mapped[str | None] = mapped_column(String)
    raw_payload: Mapped[dict | None] = mapped_column(JSON)

Index("idx_sensor_time", TelemetryPoint.sensor_id, TelemetryPoint.timestamp)

class Event(Base):
    __tablename__ = "events"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    mission_id: Mapped[int] = mapped_column(ForeignKey("missions.id"))
    timestamp: Mapped[str] = mapped_column(String)
    description: Mapped[str] = mapped_column(String)
    type: Mapped[str] = mapped_column(String)
    title: Mapped[str] = mapped_column(String)
    created_by: Mapped[str] = mapped_column(String)
    created_at: Mapped[str] = mapped_column(String)

class Role(Base):
    __tablename__ = "roles"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String, unique=True)
    description: Mapped[str | None] = mapped_column(String)

    users = relationship("User", secondary="user_roles", back_populates="roles")

class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    username: Mapped[str] = mapped_column(String, unique=True)
    email: Mapped[str] = mapped_column(String, unique=True)
    full_name: Mapped[str | None] = mapped_column(String)
    hashed_password: Mapped[str] = mapped_column(String)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)

    roles = relationship("Role", secondary="user_roles", back_populates="users")

user_roles = Table(
    "user_roles",
    Base.metadata,
    Column("user_id", ForeignKey("users.id"), primary_key=True),
    Column("role_id", ForeignKey("roles.id"), primary_key=True),
)