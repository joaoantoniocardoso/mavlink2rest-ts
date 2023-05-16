// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { MavFrame } from "./MavFrame";
import type { PositionTargetTypemask } from "./PositionTargetTypemask";

export interface SET_POSITION_TARGET_GLOBAL_INT_DATA {
  time_boot_ms: number;
  lat_int: number;
  lon_int: number;
  alt: number;
  vx: number;
  vy: number;
  vz: number;
  afx: number;
  afy: number;
  afz: number;
  yaw: number;
  yaw_rate: number;
  type_mask: PositionTargetTypemask;
  target_system: number;
  target_component: number;
  coordinate_frame: MavFrame;
}