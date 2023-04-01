// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { MavCmd } from "./MavCmd";
import type { MavFrame } from "./MavFrame";

export interface MISSION_ITEM_INT_DATA {
  param1: number;
  param2: number;
  param3: number;
  param4: number;
  x: number;
  y: number;
  z: number;
  seq: number;
  command: MavCmd;
  target_system: number;
  target_component: number;
  frame: MavFrame;
  current: number;
  autocontinue: number;
}
