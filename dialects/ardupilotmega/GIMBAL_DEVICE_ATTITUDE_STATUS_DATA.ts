// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { GimbalDeviceErrorFlags } from "./GimbalDeviceErrorFlags";
import type { GimbalDeviceFlags } from "./GimbalDeviceFlags";

export interface GIMBAL_DEVICE_ATTITUDE_STATUS_DATA {
  time_boot_ms: number;
  q: Array<number>;
  angular_velocity_x: number;
  angular_velocity_y: number;
  angular_velocity_z: number;
  failure_flags: GimbalDeviceErrorFlags;
  flags: GimbalDeviceFlags;
  target_system: number;
  target_component: number;
}
