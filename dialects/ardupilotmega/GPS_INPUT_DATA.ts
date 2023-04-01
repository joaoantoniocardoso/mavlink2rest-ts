// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { GpsInputIgnoreFlags } from "./GpsInputIgnoreFlags";

export interface GPS_INPUT_DATA {
  time_usec: bigint;
  time_week_ms: number;
  lat: number;
  lon: number;
  alt: number;
  hdop: number;
  vdop: number;
  vn: number;
  ve: number;
  vd: number;
  speed_accuracy: number;
  horiz_accuracy: number;
  vert_accuracy: number;
  ignore_flags: GpsInputIgnoreFlags;
  time_week: number;
  gps_id: number;
  fix_type: number;
  satellites_visible: number;
}
