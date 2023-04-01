// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { DeepstallStage } from "./DeepstallStage";

export interface DEEPSTALL_DATA {
  landing_lat: number;
  landing_lon: number;
  path_lat: number;
  path_lon: number;
  arc_entry_lat: number;
  arc_entry_lon: number;
  altitude: number;
  expected_travel_distance: number;
  cross_track_error: number;
  stage: DeepstallStage;
}
