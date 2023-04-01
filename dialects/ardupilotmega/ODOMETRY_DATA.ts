// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { MavFrame } from "./MavFrame";

export interface ODOMETRY_DATA {
  time_usec: bigint;
  x: number;
  y: number;
  z: number;
  q: Array<number>;
  vx: number;
  vy: number;
  vz: number;
  rollspeed: number;
  pitchspeed: number;
  yawspeed: number;
  pose_covariance: Array<number>;
  velocity_covariance: Array<number>;
  frame_id: MavFrame;
  child_frame_id: MavFrame;
}
