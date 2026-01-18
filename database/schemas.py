from pydantic import BaseModel, Field
import datetime
import uuid
from typing import Optional, List
from enum import Enum

class MissionStatus(str, Enum):
    planned = "planned"
    active = "active"
    completed = "completed"
    failed = "failed"


class QualityFlag(str, Enum):
    good = "good"
    suspect = "suspect"
    bad = "bad"

class Mission(BaseModel):
    id: uuid.UUID
    name: str
    description: Optional[str] = None
    start_date: datetime.datetime
    end_date: Optional[datetime.datetime] = None
    status: str
    created_at: datetime.datetime

class Spacecraft(BaseModel):
    id: uuid.UUID
    mission_id: uuid.UUID
    name: str
    type: str
    manufacturer: Optional[str] = None
    launch_date: datetime.datetime
    created_at: datetime.datetime

class Subsystem(BaseModel):
    id: uuid.UUID
    spacecraft_id: uuid.UUID
    name: str
    description: Optional[str] = None
    created_at: datetime.datetime

class Sensor(BaseModel):
    id: uuid.UUID
    subsystem_id: uuid.UUID
    name: str
    metric_type: str
    unit: str
    min_expected: Optional[float] = None
    max_expected: Optional[float] = None
    created_at: datetime.datetime

class TelemetryPoint(BaseModel):
    id: int
    sensor_id: uuid.UUID
    timestamp: datetime.datetime
    value: float
    quality_flag: Optional[str] = None
    raw_payload: Optional[dict] = None

class Event(BaseModel):
    id: uuid.UUID
    mission_id: uuid.UUID
    timestamp: datetime.datetime
    description: Optional[str] = None
    type: str
    title: str
    created_by: str
    created_at: datetime.datetime

class Role(BaseModel):
    id: uuid.UUID
    name: str
    description: Optional[str] = None

class User(BaseModel):
    id: uuid.UUID
    username: str
    email: str
    password_hash: str
    full_name: Optional[str] = None
    roles: List[Role] = Field(default_factory=list)
    created_at: datetime.datetime
