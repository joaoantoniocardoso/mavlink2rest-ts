// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { HlFailureFlag } from "./HlFailureFlag";
import type { MavAutopilot } from "./MavAutopilot";
import type { MavType } from "./MavType";

export interface HIGH_LATENCY2_DATA {
  timestamp: number;
  latitude: number;
  longitude: number;
  custom_mode: number;
  altitude: number;
  target_altitude: number;
  target_distance: number;
  wp_num: number;
  failure_flags: HlFailureFlag;
  mavtype: MavType;
  autopilot: MavAutopilot;
  heading: number;
  target_heading: number;
  throttle: number;
  airspeed: number;
  airspeed_sp: number;
  groundspeed: number;
  windspeed: number;
  wind_heading: number;
  eph: number;
  epv: number;
  temperature_air: number;
  climb_rate: number;
  battery: number;
  custom0: number;
  custom1: number;
  custom2: number;
}
