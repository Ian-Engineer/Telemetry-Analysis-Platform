# Database Schema

This document describes the relational schema for the Telemetry Analysis
Platform.

## Entity Relationships

    Mission
      └── Spacecraft
            └── Subsystem
                  └── Sensor
                        └── TelemetryPoint

    Mission
      └── Event

    User
      └── Role (many-to-many via user_roles)

------------------------------------------------------------------------

## missions

Represents a space mission.

  Column        Type       Description
  ------------- ---------- ------------------------------------
  id            int (PK)   Unique mission identifier
  name          string     Mission name
  description   string     Optional description
  status        string     planned, active, completed, failed
  created_at    datetime   Record creation timestamp
  start_date    datetime   Mission start date
  end_date      datetime   Mission end date (nullable)

------------------------------------------------------------------------

## spacecraft

Represents a vehicle in a mission.

  Column       Type       Description
  ------------ ---------- ----------------------------
  id           int (PK)   Spacecraft ID
  mission_id   int (FK)   References missions.id
  name         string     Spacecraft name
  type         string     orbiter, lander, satellite

------------------------------------------------------------------------

## subsystems

Logical system inside a spacecraft.

  Column          Type       Description
  --------------- ---------- -----------------------------
  id              int (PK)   Subsystem ID
  spacecraft_id   int (FK)   References spacecraft.id
  name            string     Power, Thermal, Comms, etc.
  description     string     Subsystem description
  created_at      string     Creation timestamp (string)

------------------------------------------------------------------------

## sensors

Defines a measurable metric.

  Column         Type       Description
  -------------- ---------- --------------------------------
  id             int (PK)   Sensor ID
  subsystem_id   int (FK)   References subsystems.id
  name           string     battery_voltage, temp_core
  metric_type    string     voltage, temperature, pressure
  unit           string     V, C, Pa, deg
  min_expected   int        Expected minimum value
  max_expected   int        Expected maximum value
  created_at     string     Creation timestamp (string)

------------------------------------------------------------------------

## telemetry_points

Stores time-series telemetry data.

Indexed on: `(sensor_id, timestamp)`

  Column         Type       Description
  -------------- ---------- -------------------------------
  id             int (PK)   Telemetry record ID
  sensor_id      int (FK)   References sensors.id
  timestamp      datetime   Measurement time
  value          float      Measured value
  quality_flag   string     good, suspect, bad (nullable)
  raw_payload    json       Original ingested record

------------------------------------------------------------------------

## events

Represents mission events for correlation.

  Column        Type       Description
  ------------- ---------- --------------------------------
  id            int (PK)   Event ID
  mission_id    int (FK)   References missions.id
  timestamp     string     Event time (string)
  description   string     Event description
  type          string     burn, anomaly, landing, update
  title         string     Short event title
  created_by    string     Creator identifier
  created_at    string     Creation timestamp

------------------------------------------------------------------------

## roles

Defines permission roles.

  Column        Type       Description
  ------------- ---------- ------------------
  id            int (PK)   Role ID
  name          string     Admin, Engineer
  description   string     Optional details

------------------------------------------------------------------------

## users

Application users.

  Column            Type       Description
  ----------------- ---------- -----------------------
  id                int (PK)   User ID
  username          string     Unique username
  email             string     Unique email
  full_name         string     Optional display name
  hashed_password   string     Password hash
  is_active         boolean    Active flag

------------------------------------------------------------------------

## user_roles

Join table for many-to-many User ↔ Role.

  Column    Type                 Description
  --------- -------------------- -----------------------
  user_id   int (FK)             References users.id
  role_id   int (FK)             References roles.id
  (PK)      (user_id, role_id)   Composite primary key

------------------------------------------------------------------------

## Notes

-   Telemetry is optimized for time-series querying using
    `(sensor_id, timestamp)` index.
-   Users and roles use a normalized many-to-many relationship.
-   Events allow correlation of telemetry with mission actions.
-   Schema supports ingestion from real or generated telemetry sources.
