// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ACTUATOR_CONTROL_TARGET_DATA } from "./ACTUATOR_CONTROL_TARGET_DATA";
import type { ACTUATOR_OUTPUT_STATUS_DATA } from "./ACTUATOR_OUTPUT_STATUS_DATA";
import type { ADAP_TUNING_DATA } from "./ADAP_TUNING_DATA";
import type { ADSB_VEHICLE_DATA } from "./ADSB_VEHICLE_DATA";
import type { AHRS2_DATA } from "./AHRS2_DATA";
import type { AHRS3_DATA } from "./AHRS3_DATA";
import type { AHRS_DATA } from "./AHRS_DATA";
import type { AIRSPEED_AUTOCAL_DATA } from "./AIRSPEED_AUTOCAL_DATA";
import type { AIS_VESSEL_DATA } from "./AIS_VESSEL_DATA";
import type { ALTITUDE_DATA } from "./ALTITUDE_DATA";
import type { AOA_SSA_DATA } from "./AOA_SSA_DATA";
import type { AP_ADC_DATA } from "./AP_ADC_DATA";
import type { ATTITUDE_DATA } from "./ATTITUDE_DATA";
import type { ATTITUDE_QUATERNION_COV_DATA } from "./ATTITUDE_QUATERNION_COV_DATA";
import type { ATTITUDE_QUATERNION_DATA } from "./ATTITUDE_QUATERNION_DATA";
import type { ATTITUDE_TARGET_DATA } from "./ATTITUDE_TARGET_DATA";
import type { ATT_POS_MOCAP_DATA } from "./ATT_POS_MOCAP_DATA";
import type { AUTH_KEY_DATA } from "./AUTH_KEY_DATA";
import type { AUTOPILOT_STATE_FOR_GIMBAL_DEVICE_DATA } from "./AUTOPILOT_STATE_FOR_GIMBAL_DEVICE_DATA";
import type { AUTOPILOT_VERSION_DATA } from "./AUTOPILOT_VERSION_DATA";
import type { AUTOPILOT_VERSION_REQUEST_DATA } from "./AUTOPILOT_VERSION_REQUEST_DATA";
import type { BATTERY2_DATA } from "./BATTERY2_DATA";
import type { BATTERY_STATUS_DATA } from "./BATTERY_STATUS_DATA";
import type { BUTTON_CHANGE_DATA } from "./BUTTON_CHANGE_DATA";
import type { CAMERA_CAPTURE_STATUS_DATA } from "./CAMERA_CAPTURE_STATUS_DATA";
import type { CAMERA_FEEDBACK_DATA } from "./CAMERA_FEEDBACK_DATA";
import type { CAMERA_FOV_STATUS_DATA } from "./CAMERA_FOV_STATUS_DATA";
import type { CAMERA_IMAGE_CAPTURED_DATA } from "./CAMERA_IMAGE_CAPTURED_DATA";
import type { CAMERA_INFORMATION_DATA } from "./CAMERA_INFORMATION_DATA";
import type { CAMERA_SETTINGS_DATA } from "./CAMERA_SETTINGS_DATA";
import type { CAMERA_STATUS_DATA } from "./CAMERA_STATUS_DATA";
import type { CAMERA_TRACKING_GEO_STATUS_DATA } from "./CAMERA_TRACKING_GEO_STATUS_DATA";
import type { CAMERA_TRACKING_IMAGE_STATUS_DATA } from "./CAMERA_TRACKING_IMAGE_STATUS_DATA";
import type { CAMERA_TRIGGER_DATA } from "./CAMERA_TRIGGER_DATA";
import type { CANFD_FRAME_DATA } from "./CANFD_FRAME_DATA";
import type { CAN_FILTER_MODIFY_DATA } from "./CAN_FILTER_MODIFY_DATA";
import type { CAN_FRAME_DATA } from "./CAN_FRAME_DATA";
import type { CELLULAR_CONFIG_DATA } from "./CELLULAR_CONFIG_DATA";
import type { CELLULAR_STATUS_DATA } from "./CELLULAR_STATUS_DATA";
import type { CHANGE_OPERATOR_CONTROL_ACK_DATA } from "./CHANGE_OPERATOR_CONTROL_ACK_DATA";
import type { CHANGE_OPERATOR_CONTROL_DATA } from "./CHANGE_OPERATOR_CONTROL_DATA";
import type { COLLISION_DATA } from "./COLLISION_DATA";
import type { COMMAND_ACK_DATA } from "./COMMAND_ACK_DATA";
import type { COMMAND_CANCEL_DATA } from "./COMMAND_CANCEL_DATA";
import type { COMMAND_INT_DATA } from "./COMMAND_INT_DATA";
import type { COMMAND_LONG_DATA } from "./COMMAND_LONG_DATA";
import type { COMPASSMOT_STATUS_DATA } from "./COMPASSMOT_STATUS_DATA";
import type { COMPONENT_INFORMATION_DATA } from "./COMPONENT_INFORMATION_DATA";
import type { COMPONENT_METADATA_DATA } from "./COMPONENT_METADATA_DATA";
import type { CONTROL_SYSTEM_STATE_DATA } from "./CONTROL_SYSTEM_STATE_DATA";
import type { CUBEPILOT_FIRMWARE_UPDATE_RESP_DATA } from "./CUBEPILOT_FIRMWARE_UPDATE_RESP_DATA";
import type { CUBEPILOT_FIRMWARE_UPDATE_START_DATA } from "./CUBEPILOT_FIRMWARE_UPDATE_START_DATA";
import type { CUBEPILOT_RAW_RC_DATA } from "./CUBEPILOT_RAW_RC_DATA";
import type { CURRENT_EVENT_SEQUENCE_DATA } from "./CURRENT_EVENT_SEQUENCE_DATA";
import type { DATA16_DATA } from "./DATA16_DATA";
import type { DATA32_DATA } from "./DATA32_DATA";
import type { DATA64_DATA } from "./DATA64_DATA";
import type { DATA96_DATA } from "./DATA96_DATA";
import type { DATA_STREAM_DATA } from "./DATA_STREAM_DATA";
import type { DATA_TRANSMISSION_HANDSHAKE_DATA } from "./DATA_TRANSMISSION_HANDSHAKE_DATA";
import type { DEBUG_DATA } from "./DEBUG_DATA";
import type { DEBUG_FLOAT_ARRAY_DATA } from "./DEBUG_FLOAT_ARRAY_DATA";
import type { DEBUG_VECT_DATA } from "./DEBUG_VECT_DATA";
import type { DEEPSTALL_DATA } from "./DEEPSTALL_DATA";
import type { DEVICE_OP_READ_DATA } from "./DEVICE_OP_READ_DATA";
import type { DEVICE_OP_READ_REPLY_DATA } from "./DEVICE_OP_READ_REPLY_DATA";
import type { DEVICE_OP_WRITE_DATA } from "./DEVICE_OP_WRITE_DATA";
import type { DEVICE_OP_WRITE_REPLY_DATA } from "./DEVICE_OP_WRITE_REPLY_DATA";
import type { DIGICAM_CONFIGURE_DATA } from "./DIGICAM_CONFIGURE_DATA";
import type { DIGICAM_CONTROL_DATA } from "./DIGICAM_CONTROL_DATA";
import type { DISTANCE_SENSOR_DATA } from "./DISTANCE_SENSOR_DATA";
import type { EFI_STATUS_DATA } from "./EFI_STATUS_DATA";
import type { EKF_STATUS_REPORT_DATA } from "./EKF_STATUS_REPORT_DATA";
import type { ENCAPSULATED_DATA_DATA } from "./ENCAPSULATED_DATA_DATA";
import type { ESC_INFO_DATA } from "./ESC_INFO_DATA";
import type { ESC_STATUS_DATA } from "./ESC_STATUS_DATA";
import type { ESC_TELEMETRY_1_TO_4_DATA } from "./ESC_TELEMETRY_1_TO_4_DATA";
import type { ESC_TELEMETRY_5_TO_8_DATA } from "./ESC_TELEMETRY_5_TO_8_DATA";
import type { ESC_TELEMETRY_9_TO_12_DATA } from "./ESC_TELEMETRY_9_TO_12_DATA";
import type { ESTIMATOR_STATUS_DATA } from "./ESTIMATOR_STATUS_DATA";
import type { EVENT_DATA } from "./EVENT_DATA";
import type { EXTENDED_SYS_STATE_DATA } from "./EXTENDED_SYS_STATE_DATA";
import type { FENCE_FETCH_POINT_DATA } from "./FENCE_FETCH_POINT_DATA";
import type { FENCE_POINT_DATA } from "./FENCE_POINT_DATA";
import type { FENCE_STATUS_DATA } from "./FENCE_STATUS_DATA";
import type { FILE_TRANSFER_PROTOCOL_DATA } from "./FILE_TRANSFER_PROTOCOL_DATA";
import type { FLIGHT_INFORMATION_DATA } from "./FLIGHT_INFORMATION_DATA";
import type { FOLLOW_TARGET_DATA } from "./FOLLOW_TARGET_DATA";
import type { GENERATOR_STATUS_DATA } from "./GENERATOR_STATUS_DATA";
import type { GIMBAL_CONTROL_DATA } from "./GIMBAL_CONTROL_DATA";
import type { GIMBAL_DEVICE_ATTITUDE_STATUS_DATA } from "./GIMBAL_DEVICE_ATTITUDE_STATUS_DATA";
import type { GIMBAL_DEVICE_INFORMATION_DATA } from "./GIMBAL_DEVICE_INFORMATION_DATA";
import type { GIMBAL_DEVICE_SET_ATTITUDE_DATA } from "./GIMBAL_DEVICE_SET_ATTITUDE_DATA";
import type { GIMBAL_MANAGER_INFORMATION_DATA } from "./GIMBAL_MANAGER_INFORMATION_DATA";
import type { GIMBAL_MANAGER_SET_ATTITUDE_DATA } from "./GIMBAL_MANAGER_SET_ATTITUDE_DATA";
import type { GIMBAL_MANAGER_SET_MANUAL_CONTROL_DATA } from "./GIMBAL_MANAGER_SET_MANUAL_CONTROL_DATA";
import type { GIMBAL_MANAGER_SET_PITCHYAW_DATA } from "./GIMBAL_MANAGER_SET_PITCHYAW_DATA";
import type { GIMBAL_MANAGER_STATUS_DATA } from "./GIMBAL_MANAGER_STATUS_DATA";
import type { GIMBAL_REPORT_DATA } from "./GIMBAL_REPORT_DATA";
import type { GIMBAL_TORQUE_CMD_REPORT_DATA } from "./GIMBAL_TORQUE_CMD_REPORT_DATA";
import type { GLOBAL_POSITION_INT_COV_DATA } from "./GLOBAL_POSITION_INT_COV_DATA";
import type { GLOBAL_POSITION_INT_DATA } from "./GLOBAL_POSITION_INT_DATA";
import type { GLOBAL_VISION_POSITION_ESTIMATE_DATA } from "./GLOBAL_VISION_POSITION_ESTIMATE_DATA";
import type { GOPRO_GET_REQUEST_DATA } from "./GOPRO_GET_REQUEST_DATA";
import type { GOPRO_GET_RESPONSE_DATA } from "./GOPRO_GET_RESPONSE_DATA";
import type { GOPRO_HEARTBEAT_DATA } from "./GOPRO_HEARTBEAT_DATA";
import type { GOPRO_SET_REQUEST_DATA } from "./GOPRO_SET_REQUEST_DATA";
import type { GOPRO_SET_RESPONSE_DATA } from "./GOPRO_SET_RESPONSE_DATA";
import type { GPS2_RAW_DATA } from "./GPS2_RAW_DATA";
import type { GPS2_RTK_DATA } from "./GPS2_RTK_DATA";
import type { GPS_GLOBAL_ORIGIN_DATA } from "./GPS_GLOBAL_ORIGIN_DATA";
import type { GPS_INJECT_DATA_DATA } from "./GPS_INJECT_DATA_DATA";
import type { GPS_INPUT_DATA } from "./GPS_INPUT_DATA";
import type { GPS_RAW_INT_DATA } from "./GPS_RAW_INT_DATA";
import type { GPS_RTCM_DATA_DATA } from "./GPS_RTCM_DATA_DATA";
import type { GPS_RTK_DATA } from "./GPS_RTK_DATA";
import type { GPS_STATUS_DATA } from "./GPS_STATUS_DATA";
import type { HEARTBEAT_DATA } from "./HEARTBEAT_DATA";
import type { HERELINK_TELEM_DATA } from "./HERELINK_TELEM_DATA";
import type { HERELINK_VIDEO_STREAM_INFORMATION_DATA } from "./HERELINK_VIDEO_STREAM_INFORMATION_DATA";
import type { HIGHRES_IMU_DATA } from "./HIGHRES_IMU_DATA";
import type { HIGH_LATENCY2_DATA } from "./HIGH_LATENCY2_DATA";
import type { HIGH_LATENCY_DATA } from "./HIGH_LATENCY_DATA";
import type { HIL_ACTUATOR_CONTROLS_DATA } from "./HIL_ACTUATOR_CONTROLS_DATA";
import type { HIL_CONTROLS_DATA } from "./HIL_CONTROLS_DATA";
import type { HIL_GPS_DATA } from "./HIL_GPS_DATA";
import type { HIL_OPTICAL_FLOW_DATA } from "./HIL_OPTICAL_FLOW_DATA";
import type { HIL_RC_INPUTS_RAW_DATA } from "./HIL_RC_INPUTS_RAW_DATA";
import type { HIL_SENSOR_DATA } from "./HIL_SENSOR_DATA";
import type { HIL_STATE_DATA } from "./HIL_STATE_DATA";
import type { HIL_STATE_QUATERNION_DATA } from "./HIL_STATE_QUATERNION_DATA";
import type { HOME_POSITION_DATA } from "./HOME_POSITION_DATA";
import type { HWSTATUS_DATA } from "./HWSTATUS_DATA";
import type { HYGROMETER_SENSOR_DATA } from "./HYGROMETER_SENSOR_DATA";
import type { ICAROUS_HEARTBEAT_DATA } from "./ICAROUS_HEARTBEAT_DATA";
import type { ICAROUS_KINEMATIC_BANDS_DATA } from "./ICAROUS_KINEMATIC_BANDS_DATA";
import type { ISBD_LINK_STATUS_DATA } from "./ISBD_LINK_STATUS_DATA";
import type { LANDING_TARGET_DATA } from "./LANDING_TARGET_DATA";
import type { LED_CONTROL_DATA } from "./LED_CONTROL_DATA";
import type { LIMITS_STATUS_DATA } from "./LIMITS_STATUS_DATA";
import type { LINK_NODE_STATUS_DATA } from "./LINK_NODE_STATUS_DATA";
import type { LOCAL_POSITION_NED_COV_DATA } from "./LOCAL_POSITION_NED_COV_DATA";
import type { LOCAL_POSITION_NED_DATA } from "./LOCAL_POSITION_NED_DATA";
import type { LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET_DATA } from "./LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET_DATA";
import type { LOGGING_ACK_DATA } from "./LOGGING_ACK_DATA";
import type { LOGGING_DATA_ACKED_DATA } from "./LOGGING_DATA_ACKED_DATA";
import type { LOGGING_DATA_DATA } from "./LOGGING_DATA_DATA";
import type { LOG_DATA_DATA } from "./LOG_DATA_DATA";
import type { LOG_ENTRY_DATA } from "./LOG_ENTRY_DATA";
import type { LOG_ERASE_DATA } from "./LOG_ERASE_DATA";
import type { LOG_REQUEST_DATA_DATA } from "./LOG_REQUEST_DATA_DATA";
import type { LOG_REQUEST_END_DATA } from "./LOG_REQUEST_END_DATA";
import type { LOG_REQUEST_LIST_DATA } from "./LOG_REQUEST_LIST_DATA";
import type { MAG_CAL_PROGRESS_DATA } from "./MAG_CAL_PROGRESS_DATA";
import type { MAG_CAL_REPORT_DATA } from "./MAG_CAL_REPORT_DATA";
import type { MANUAL_CONTROL_DATA } from "./MANUAL_CONTROL_DATA";
import type { MANUAL_SETPOINT_DATA } from "./MANUAL_SETPOINT_DATA";
import type { MCU_STATUS_DATA } from "./MCU_STATUS_DATA";
import type { MEMINFO_DATA } from "./MEMINFO_DATA";
import type { MEMORY_VECT_DATA } from "./MEMORY_VECT_DATA";
import type { MESSAGE_INTERVAL_DATA } from "./MESSAGE_INTERVAL_DATA";
import type { MISSION_ACK_DATA } from "./MISSION_ACK_DATA";
import type { MISSION_CLEAR_ALL_DATA } from "./MISSION_CLEAR_ALL_DATA";
import type { MISSION_COUNT_DATA } from "./MISSION_COUNT_DATA";
import type { MISSION_CURRENT_DATA } from "./MISSION_CURRENT_DATA";
import type { MISSION_ITEM_DATA } from "./MISSION_ITEM_DATA";
import type { MISSION_ITEM_INT_DATA } from "./MISSION_ITEM_INT_DATA";
import type { MISSION_ITEM_REACHED_DATA } from "./MISSION_ITEM_REACHED_DATA";
import type { MISSION_REQUEST_DATA } from "./MISSION_REQUEST_DATA";
import type { MISSION_REQUEST_INT_DATA } from "./MISSION_REQUEST_INT_DATA";
import type { MISSION_REQUEST_LIST_DATA } from "./MISSION_REQUEST_LIST_DATA";
import type { MISSION_REQUEST_PARTIAL_LIST_DATA } from "./MISSION_REQUEST_PARTIAL_LIST_DATA";
import type { MISSION_SET_CURRENT_DATA } from "./MISSION_SET_CURRENT_DATA";
import type { MISSION_WRITE_PARTIAL_LIST_DATA } from "./MISSION_WRITE_PARTIAL_LIST_DATA";
import type { MOUNT_CONFIGURE_DATA } from "./MOUNT_CONFIGURE_DATA";
import type { MOUNT_CONTROL_DATA } from "./MOUNT_CONTROL_DATA";
import type { MOUNT_ORIENTATION_DATA } from "./MOUNT_ORIENTATION_DATA";
import type { MOUNT_STATUS_DATA } from "./MOUNT_STATUS_DATA";
import type { NAMED_VALUE_FLOAT_DATA } from "./NAMED_VALUE_FLOAT_DATA";
import type { NAMED_VALUE_INT_DATA } from "./NAMED_VALUE_INT_DATA";
import type { NAV_CONTROLLER_OUTPUT_DATA } from "./NAV_CONTROLLER_OUTPUT_DATA";
import type { OBSTACLE_DISTANCE_3D_DATA } from "./OBSTACLE_DISTANCE_3D_DATA";
import type { OBSTACLE_DISTANCE_DATA } from "./OBSTACLE_DISTANCE_DATA";
import type { ODOMETRY_DATA } from "./ODOMETRY_DATA";
import type { ONBOARD_COMPUTER_STATUS_DATA } from "./ONBOARD_COMPUTER_STATUS_DATA";
import type { OPEN_DRONE_ID_ARM_STATUS_DATA } from "./OPEN_DRONE_ID_ARM_STATUS_DATA";
import type { OPEN_DRONE_ID_AUTHENTICATION_DATA } from "./OPEN_DRONE_ID_AUTHENTICATION_DATA";
import type { OPEN_DRONE_ID_BASIC_ID_DATA } from "./OPEN_DRONE_ID_BASIC_ID_DATA";
import type { OPEN_DRONE_ID_LOCATION_DATA } from "./OPEN_DRONE_ID_LOCATION_DATA";
import type { OPEN_DRONE_ID_MESSAGE_PACK_DATA } from "./OPEN_DRONE_ID_MESSAGE_PACK_DATA";
import type { OPEN_DRONE_ID_OPERATOR_ID_DATA } from "./OPEN_DRONE_ID_OPERATOR_ID_DATA";
import type { OPEN_DRONE_ID_SELF_ID_DATA } from "./OPEN_DRONE_ID_SELF_ID_DATA";
import type { OPEN_DRONE_ID_SYSTEM_DATA } from "./OPEN_DRONE_ID_SYSTEM_DATA";
import type { OPEN_DRONE_ID_SYSTEM_UPDATE_DATA } from "./OPEN_DRONE_ID_SYSTEM_UPDATE_DATA";
import type { OPTICAL_FLOW_DATA } from "./OPTICAL_FLOW_DATA";
import type { OPTICAL_FLOW_RAD_DATA } from "./OPTICAL_FLOW_RAD_DATA";
import type { ORBIT_EXECUTION_STATUS_DATA } from "./ORBIT_EXECUTION_STATUS_DATA";
import type { OSD_PARAM_CONFIG_DATA } from "./OSD_PARAM_CONFIG_DATA";
import type { OSD_PARAM_CONFIG_REPLY_DATA } from "./OSD_PARAM_CONFIG_REPLY_DATA";
import type { OSD_PARAM_SHOW_CONFIG_DATA } from "./OSD_PARAM_SHOW_CONFIG_DATA";
import type { OSD_PARAM_SHOW_CONFIG_REPLY_DATA } from "./OSD_PARAM_SHOW_CONFIG_REPLY_DATA";
import type { PARAM_EXT_ACK_DATA } from "./PARAM_EXT_ACK_DATA";
import type { PARAM_EXT_REQUEST_LIST_DATA } from "./PARAM_EXT_REQUEST_LIST_DATA";
import type { PARAM_EXT_REQUEST_READ_DATA } from "./PARAM_EXT_REQUEST_READ_DATA";
import type { PARAM_EXT_SET_DATA } from "./PARAM_EXT_SET_DATA";
import type { PARAM_EXT_VALUE_DATA } from "./PARAM_EXT_VALUE_DATA";
import type { PARAM_MAP_RC_DATA } from "./PARAM_MAP_RC_DATA";
import type { PARAM_REQUEST_LIST_DATA } from "./PARAM_REQUEST_LIST_DATA";
import type { PARAM_REQUEST_READ_DATA } from "./PARAM_REQUEST_READ_DATA";
import type { PARAM_SET_DATA } from "./PARAM_SET_DATA";
import type { PARAM_VALUE_DATA } from "./PARAM_VALUE_DATA";
import type { PID_TUNING_DATA } from "./PID_TUNING_DATA";
import type { PING_DATA } from "./PING_DATA";
import type { PLAY_TUNE_DATA } from "./PLAY_TUNE_DATA";
import type { PLAY_TUNE_V2_DATA } from "./PLAY_TUNE_V2_DATA";
import type { POSITION_TARGET_GLOBAL_INT_DATA } from "./POSITION_TARGET_GLOBAL_INT_DATA";
import type { POSITION_TARGET_LOCAL_NED_DATA } from "./POSITION_TARGET_LOCAL_NED_DATA";
import type { POWER_STATUS_DATA } from "./POWER_STATUS_DATA";
import type { PROTOCOL_VERSION_DATA } from "./PROTOCOL_VERSION_DATA";
import type { RADIO_DATA } from "./RADIO_DATA";
import type { RADIO_STATUS_DATA } from "./RADIO_STATUS_DATA";
import type { RALLY_FETCH_POINT_DATA } from "./RALLY_FETCH_POINT_DATA";
import type { RALLY_POINT_DATA } from "./RALLY_POINT_DATA";
import type { RANGEFINDER_DATA } from "./RANGEFINDER_DATA";
import type { RAW_IMU_DATA } from "./RAW_IMU_DATA";
import type { RAW_PRESSURE_DATA } from "./RAW_PRESSURE_DATA";
import type { RAW_RPM_DATA } from "./RAW_RPM_DATA";
import type { RC_CHANNELS_DATA } from "./RC_CHANNELS_DATA";
import type { RC_CHANNELS_OVERRIDE_DATA } from "./RC_CHANNELS_OVERRIDE_DATA";
import type { RC_CHANNELS_RAW_DATA } from "./RC_CHANNELS_RAW_DATA";
import type { RC_CHANNELS_SCALED_DATA } from "./RC_CHANNELS_SCALED_DATA";
import type { REMOTE_LOG_BLOCK_STATUS_DATA } from "./REMOTE_LOG_BLOCK_STATUS_DATA";
import type { REMOTE_LOG_DATA_BLOCK_DATA } from "./REMOTE_LOG_DATA_BLOCK_DATA";
import type { REQUEST_DATA_STREAM_DATA } from "./REQUEST_DATA_STREAM_DATA";
import type { REQUEST_EVENT_DATA } from "./REQUEST_EVENT_DATA";
import type { RESOURCE_REQUEST_DATA } from "./RESOURCE_REQUEST_DATA";
import type { RESPONSE_EVENT_ERROR_DATA } from "./RESPONSE_EVENT_ERROR_DATA";
import type { RPM_DATA } from "./RPM_DATA";
import type { SAFETY_ALLOWED_AREA_DATA } from "./SAFETY_ALLOWED_AREA_DATA";
import type { SAFETY_SET_ALLOWED_AREA_DATA } from "./SAFETY_SET_ALLOWED_AREA_DATA";
import type { SCALED_IMU2_DATA } from "./SCALED_IMU2_DATA";
import type { SCALED_IMU3_DATA } from "./SCALED_IMU3_DATA";
import type { SCALED_IMU_DATA } from "./SCALED_IMU_DATA";
import type { SCALED_PRESSURE2_DATA } from "./SCALED_PRESSURE2_DATA";
import type { SCALED_PRESSURE3_DATA } from "./SCALED_PRESSURE3_DATA";
import type { SCALED_PRESSURE_DATA } from "./SCALED_PRESSURE_DATA";
import type { SENSOR_OFFSETS_DATA } from "./SENSOR_OFFSETS_DATA";
import type { SERIAL_CONTROL_DATA } from "./SERIAL_CONTROL_DATA";
import type { SERVO_OUTPUT_RAW_DATA } from "./SERVO_OUTPUT_RAW_DATA";
import type { SETUP_SIGNING_DATA } from "./SETUP_SIGNING_DATA";
import type { SET_ACTUATOR_CONTROL_TARGET_DATA } from "./SET_ACTUATOR_CONTROL_TARGET_DATA";
import type { SET_ATTITUDE_TARGET_DATA } from "./SET_ATTITUDE_TARGET_DATA";
import type { SET_GPS_GLOBAL_ORIGIN_DATA } from "./SET_GPS_GLOBAL_ORIGIN_DATA";
import type { SET_HOME_POSITION_DATA } from "./SET_HOME_POSITION_DATA";
import type { SET_MAG_OFFSETS_DATA } from "./SET_MAG_OFFSETS_DATA";
import type { SET_MODE_DATA } from "./SET_MODE_DATA";
import type { SET_POSITION_TARGET_GLOBAL_INT_DATA } from "./SET_POSITION_TARGET_GLOBAL_INT_DATA";
import type { SET_POSITION_TARGET_LOCAL_NED_DATA } from "./SET_POSITION_TARGET_LOCAL_NED_DATA";
import type { SIMSTATE_DATA } from "./SIMSTATE_DATA";
import type { SIM_STATE_DATA } from "./SIM_STATE_DATA";
import type { SMART_BATTERY_INFO_DATA } from "./SMART_BATTERY_INFO_DATA";
import type { STATUSTEXT_DATA } from "./STATUSTEXT_DATA";
import type { STORAGE_INFORMATION_DATA } from "./STORAGE_INFORMATION_DATA";
import type { SUPPORTED_TUNES_DATA } from "./SUPPORTED_TUNES_DATA";
import type { SYSTEM_TIME_DATA } from "./SYSTEM_TIME_DATA";
import type { SYS_STATUS_DATA } from "./SYS_STATUS_DATA";
import type { TERRAIN_CHECK_DATA } from "./TERRAIN_CHECK_DATA";
import type { TERRAIN_DATA_DATA } from "./TERRAIN_DATA_DATA";
import type { TERRAIN_REPORT_DATA } from "./TERRAIN_REPORT_DATA";
import type { TERRAIN_REQUEST_DATA } from "./TERRAIN_REQUEST_DATA";
import type { TIMESYNC_DATA } from "./TIMESYNC_DATA";
import type { TIME_ESTIMATE_TO_TARGET_DATA } from "./TIME_ESTIMATE_TO_TARGET_DATA";
import type { TRAJECTORY_REPRESENTATION_BEZIER_DATA } from "./TRAJECTORY_REPRESENTATION_BEZIER_DATA";
import type { TRAJECTORY_REPRESENTATION_WAYPOINTS_DATA } from "./TRAJECTORY_REPRESENTATION_WAYPOINTS_DATA";
import type { TUNNEL_DATA } from "./TUNNEL_DATA";
import type { UAVCAN_NODE_INFO_DATA } from "./UAVCAN_NODE_INFO_DATA";
import type { UAVCAN_NODE_STATUS_DATA } from "./UAVCAN_NODE_STATUS_DATA";
import type { UAVIONIX_ADSB_OUT_CFG_DATA } from "./UAVIONIX_ADSB_OUT_CFG_DATA";
import type { UAVIONIX_ADSB_OUT_DYNAMIC_DATA } from "./UAVIONIX_ADSB_OUT_DYNAMIC_DATA";
import type { UAVIONIX_ADSB_TRANSCEIVER_HEALTH_REPORT_DATA } from "./UAVIONIX_ADSB_TRANSCEIVER_HEALTH_REPORT_DATA";
import type { UTM_GLOBAL_POSITION_DATA } from "./UTM_GLOBAL_POSITION_DATA";
import type { V2_EXTENSION_DATA } from "./V2_EXTENSION_DATA";
import type { VFR_HUD_DATA } from "./VFR_HUD_DATA";
import type { VIBRATION_DATA } from "./VIBRATION_DATA";
import type { VICON_POSITION_ESTIMATE_DATA } from "./VICON_POSITION_ESTIMATE_DATA";
import type { VIDEO_STREAM_INFORMATION_DATA } from "./VIDEO_STREAM_INFORMATION_DATA";
import type { VIDEO_STREAM_STATUS_DATA } from "./VIDEO_STREAM_STATUS_DATA";
import type { VISION_POSITION_DELTA_DATA } from "./VISION_POSITION_DELTA_DATA";
import type { VISION_POSITION_ESTIMATE_DATA } from "./VISION_POSITION_ESTIMATE_DATA";
import type { VISION_SPEED_ESTIMATE_DATA } from "./VISION_SPEED_ESTIMATE_DATA";
import type { WATER_DEPTH_DATA } from "./WATER_DEPTH_DATA";
import type { WHEEL_DISTANCE_DATA } from "./WHEEL_DISTANCE_DATA";
import type { WIFI_CONFIG_AP_DATA } from "./WIFI_CONFIG_AP_DATA";
import type { WINCH_STATUS_DATA } from "./WINCH_STATUS_DATA";
import type { WIND_COV_DATA } from "./WIND_COV_DATA";
import type { WIND_DATA } from "./WIND_DATA";

export type MavMessage =
  | ({ type: "LOGGING_DATA" } & LOGGING_DATA_DATA)
  | ({ type: "SCALED_PRESSURE2" } & SCALED_PRESSURE2_DATA)
  | ({ type: "TIMESYNC" } & TIMESYNC_DATA)
  | ({ type: "DEBUG_VECT" } & DEBUG_VECT_DATA)
  | ({ type: "AHRS3" } & AHRS3_DATA)
  | ({
      type: "LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET";
    } & LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET_DATA)
  | ({ type: "TIME_ESTIMATE_TO_TARGET" } & TIME_ESTIMATE_TO_TARGET_DATA)
  | ({ type: "GPS_RTK" } & GPS_RTK_DATA)
  | ({ type: "PARAM_EXT_SET" } & PARAM_EXT_SET_DATA)
  | ({ type: "LOCAL_POSITION_NED" } & LOCAL_POSITION_NED_DATA)
  | ({ type: "MISSION_CLEAR_ALL" } & MISSION_CLEAR_ALL_DATA)
  | ({ type: "EXTENDED_SYS_STATE" } & EXTENDED_SYS_STATE_DATA)
  | ({ type: "RC_CHANNELS_RAW" } & RC_CHANNELS_RAW_DATA)
  | ({
      type: "CAMERA_TRACKING_IMAGE_STATUS";
    } & CAMERA_TRACKING_IMAGE_STATUS_DATA)
  | ({ type: "HERELINK_TELEM" } & HERELINK_TELEM_DATA)
  | ({ type: "AUTOPILOT_VERSION_REQUEST" } & AUTOPILOT_VERSION_REQUEST_DATA)
  | ({ type: "PARAM_REQUEST_READ" } & PARAM_REQUEST_READ_DATA)
  | ({ type: "GIMBAL_MANAGER_SET_ATTITUDE" } & GIMBAL_MANAGER_SET_ATTITUDE_DATA)
  | ({ type: "MISSION_CURRENT" } & MISSION_CURRENT_DATA)
  | ({ type: "GLOBAL_POSITION_INT" } & GLOBAL_POSITION_INT_DATA)
  | ({ type: "PARAM_SET" } & PARAM_SET_DATA)
  | ({ type: "PROTOCOL_VERSION" } & PROTOCOL_VERSION_DATA)
  | ({ type: "COMMAND_INT" } & COMMAND_INT_DATA)
  | ({ type: "UTM_GLOBAL_POSITION" } & UTM_GLOBAL_POSITION_DATA)
  | ({ type: "COMMAND_LONG" } & COMMAND_LONG_DATA)
  | ({ type: "ACTUATOR_OUTPUT_STATUS" } & ACTUATOR_OUTPUT_STATUS_DATA)
  | ({
      type: "MISSION_REQUEST_PARTIAL_LIST";
    } & MISSION_REQUEST_PARTIAL_LIST_DATA)
  | ({ type: "OSD_PARAM_CONFIG" } & OSD_PARAM_CONFIG_DATA)
  | ({
      type: "OPEN_DRONE_ID_AUTHENTICATION";
    } & OPEN_DRONE_ID_AUTHENTICATION_DATA)
  | ({ type: "COMMAND_ACK" } & COMMAND_ACK_DATA)
  | ({ type: "ATTITUDE" } & ATTITUDE_DATA)
  | ({ type: "UAVCAN_NODE_INFO" } & UAVCAN_NODE_INFO_DATA)
  | ({ type: "UAVIONIX_ADSB_OUT_CFG" } & UAVIONIX_ADSB_OUT_CFG_DATA)
  | ({ type: "TUNNEL" } & TUNNEL_DATA)
  | ({ type: "SET_HOME_POSITION" } & SET_HOME_POSITION_DATA)
  | ({ type: "ADSB_VEHICLE" } & ADSB_VEHICLE_DATA)
  | ({ type: "SCALED_IMU" } & SCALED_IMU_DATA)
  | ({ type: "FENCE_FETCH_POINT" } & FENCE_FETCH_POINT_DATA)
  | ({
      type: "TRAJECTORY_REPRESENTATION_BEZIER";
    } & TRAJECTORY_REPRESENTATION_BEZIER_DATA)
  | ({ type: "RAW_IMU" } & RAW_IMU_DATA)
  | ({ type: "RADIO" } & RADIO_DATA)
  | ({ type: "DATA_TRANSMISSION_HANDSHAKE" } & DATA_TRANSMISSION_HANDSHAKE_DATA)
  | ({ type: "CAMERA_IMAGE_CAPTURED" } & CAMERA_IMAGE_CAPTURED_DATA)
  | ({ type: "HIL_STATE" } & HIL_STATE_DATA)
  | ({ type: "SIM_STATE" } & SIM_STATE_DATA)
  | ({ type: "HIL_ACTUATOR_CONTROLS" } & HIL_ACTUATOR_CONTROLS_DATA)
  | ({ type: "PARAM_REQUEST_LIST" } & PARAM_REQUEST_LIST_DATA)
  | ({ type: "DATA64" } & DATA64_DATA)
  | ({ type: "HIL_GPS" } & HIL_GPS_DATA)
  | ({ type: "ONBOARD_COMPUTER_STATUS" } & ONBOARD_COMPUTER_STATUS_DATA)
  | ({ type: "TERRAIN_CHECK" } & TERRAIN_CHECK_DATA)
  | ({ type: "SERVO_OUTPUT_RAW" } & SERVO_OUTPUT_RAW_DATA)
  | ({ type: "LANDING_TARGET" } & LANDING_TARGET_DATA)
  | ({ type: "OPEN_DRONE_ID_SYSTEM" } & OPEN_DRONE_ID_SYSTEM_DATA)
  | ({ type: "LOG_ENTRY" } & LOG_ENTRY_DATA)
  | ({ type: "OPTICAL_FLOW" } & OPTICAL_FLOW_DATA)
  | ({ type: "RC_CHANNELS_SCALED" } & RC_CHANNELS_SCALED_DATA)
  | ({ type: "OPTICAL_FLOW_RAD" } & OPTICAL_FLOW_RAD_DATA)
  | ({ type: "FOLLOW_TARGET" } & FOLLOW_TARGET_DATA)
  | ({ type: "SAFETY_ALLOWED_AREA" } & SAFETY_ALLOWED_AREA_DATA)
  | ({ type: "TERRAIN_REQUEST" } & TERRAIN_REQUEST_DATA)
  | ({ type: "GPS2_RAW" } & GPS2_RAW_DATA)
  | ({ type: "CUBEPILOT_RAW_RC" } & CUBEPILOT_RAW_RC_DATA)
  | ({ type: "MOUNT_STATUS" } & MOUNT_STATUS_DATA)
  | ({ type: "ESC_INFO" } & ESC_INFO_DATA)
  | ({ type: "REMOTE_LOG_DATA_BLOCK" } & REMOTE_LOG_DATA_BLOCK_DATA)
  | ({ type: "DATA_STREAM" } & DATA_STREAM_DATA)
  | ({
      type: "GIMBAL_DEVICE_ATTITUDE_STATUS";
    } & GIMBAL_DEVICE_ATTITUDE_STATUS_DATA)
  | ({ type: "PLAY_TUNE_V2" } & PLAY_TUNE_V2_DATA)
  | ({ type: "DIGICAM_CONTROL" } & DIGICAM_CONTROL_DATA)
  | ({ type: "PLAY_TUNE" } & PLAY_TUNE_DATA)
  | ({ type: "GLOBAL_POSITION_INT_COV" } & GLOBAL_POSITION_INT_COV_DATA)
  | ({ type: "CHANGE_OPERATOR_CONTROL_ACK" } & CHANGE_OPERATOR_CONTROL_ACK_DATA)
  | ({ type: "HIGHRES_IMU" } & HIGHRES_IMU_DATA)
  | ({ type: "CAMERA_FEEDBACK" } & CAMERA_FEEDBACK_DATA)
  | ({ type: "GOPRO_GET_REQUEST" } & GOPRO_GET_REQUEST_DATA)
  | ({ type: "LOG_DATA" } & LOG_DATA_DATA)
  | ({ type: "LOCAL_POSITION_NED_COV" } & LOCAL_POSITION_NED_COV_DATA)
  | ({ type: "DEVICE_OP_READ_REPLY" } & DEVICE_OP_READ_REPLY_DATA)
  | ({ type: "SET_ATTITUDE_TARGET" } & SET_ATTITUDE_TARGET_DATA)
  | ({ type: "DATA96" } & DATA96_DATA)
  | ({ type: "HIL_SENSOR" } & HIL_SENSOR_DATA)
  | ({ type: "CAMERA_CAPTURE_STATUS" } & CAMERA_CAPTURE_STATUS_DATA)
  | ({
      type: "UAVIONIX_ADSB_TRANSCEIVER_HEALTH_REPORT";
    } & UAVIONIX_ADSB_TRANSCEIVER_HEALTH_REPORT_DATA)
  | ({ type: "STATUSTEXT" } & STATUSTEXT_DATA)
  | ({ type: "OSD_PARAM_CONFIG_REPLY" } & OSD_PARAM_CONFIG_REPLY_DATA)
  | ({ type: "RALLY_FETCH_POINT" } & RALLY_FETCH_POINT_DATA)
  | ({ type: "POWER_STATUS" } & POWER_STATUS_DATA)
  | ({ type: "AP_ADC" } & AP_ADC_DATA)
  | ({ type: "BATTERY_STATUS" } & BATTERY_STATUS_DATA)
  | ({ type: "ICAROUS_KINEMATIC_BANDS" } & ICAROUS_KINEMATIC_BANDS_DATA)
  | ({ type: "SMART_BATTERY_INFO" } & SMART_BATTERY_INFO_DATA)
  | ({ type: "OBSTACLE_DISTANCE_3D" } & OBSTACLE_DISTANCE_3D_DATA)
  | ({ type: "FILE_TRANSFER_PROTOCOL" } & FILE_TRANSFER_PROTOCOL_DATA)
  | ({ type: "MAG_CAL_REPORT" } & MAG_CAL_REPORT_DATA)
  | ({ type: "LOGGING_DATA_ACKED" } & LOGGING_DATA_ACKED_DATA)
  | ({ type: "SCALED_PRESSURE3" } & SCALED_PRESSURE3_DATA)
  | ({ type: "WIND" } & WIND_DATA)
  | ({ type: "POSITION_TARGET_GLOBAL_INT" } & POSITION_TARGET_GLOBAL_INT_DATA)
  | ({ type: "HIL_RC_INPUTS_RAW" } & HIL_RC_INPUTS_RAW_DATA)
  | ({ type: "OPEN_DRONE_ID_ARM_STATUS" } & OPEN_DRONE_ID_ARM_STATUS_DATA)
  | ({ type: "LOG_REQUEST_END" } & LOG_REQUEST_END_DATA)
  | ({ type: "COMPONENT_METADATA" } & COMPONENT_METADATA_DATA)
  | ({ type: "HIGH_LATENCY" } & HIGH_LATENCY_DATA)
  | ({ type: "MEMORY_VECT" } & MEMORY_VECT_DATA)
  | ({
      type: "HERELINK_VIDEO_STREAM_INFORMATION";
    } & HERELINK_VIDEO_STREAM_INFORMATION_DATA)
  | ({ type: "LIMITS_STATUS" } & LIMITS_STATUS_DATA)
  | ({ type: "DEEPSTALL" } & DEEPSTALL_DATA)
  | ({
      type: "TRAJECTORY_REPRESENTATION_WAYPOINTS";
    } & TRAJECTORY_REPRESENTATION_WAYPOINTS_DATA)
  | ({ type: "HIL_STATE_QUATERNION" } & HIL_STATE_QUATERNION_DATA)
  | ({ type: "MISSION_REQUEST_INT" } & MISSION_REQUEST_INT_DATA)
  | ({ type: "REQUEST_DATA_STREAM" } & REQUEST_DATA_STREAM_DATA)
  | ({ type: "DEVICE_OP_WRITE" } & DEVICE_OP_WRITE_DATA)
  | ({ type: "GPS_RAW_INT" } & GPS_RAW_INT_DATA)
  | ({ type: "GIMBAL_DEVICE_SET_ATTITUDE" } & GIMBAL_DEVICE_SET_ATTITUDE_DATA)
  | ({ type: "GOPRO_SET_RESPONSE" } & GOPRO_SET_RESPONSE_DATA)
  | ({ type: "MISSION_COUNT" } & MISSION_COUNT_DATA)
  | ({ type: "DATA32" } & DATA32_DATA)
  | ({
      type: "SET_POSITION_TARGET_GLOBAL_INT";
    } & SET_POSITION_TARGET_GLOBAL_INT_DATA)
  | ({ type: "LOG_REQUEST_LIST" } & LOG_REQUEST_LIST_DATA)
  | ({ type: "LOGGING_ACK" } & LOGGING_ACK_DATA)
  | ({ type: "HIL_OPTICAL_FLOW" } & HIL_OPTICAL_FLOW_DATA)
  | ({ type: "CAMERA_FOV_STATUS" } & CAMERA_FOV_STATUS_DATA)
  | ({ type: "RADIO_STATUS" } & RADIO_STATUS_DATA)
  | ({ type: "CELLULAR_STATUS" } & CELLULAR_STATUS_DATA)
  | ({ type: "PARAM_EXT_REQUEST_READ" } & PARAM_EXT_REQUEST_READ_DATA)
  | ({ type: "MOUNT_CONTROL" } & MOUNT_CONTROL_DATA)
  | ({ type: "ESC_TELEMETRY_5_TO_8" } & ESC_TELEMETRY_5_TO_8_DATA)
  | ({ type: "SENSOR_OFFSETS" } & SENSOR_OFFSETS_DATA)
  | ({ type: "BATTERY2" } & BATTERY2_DATA)
  | ({ type: "DEVICE_OP_READ" } & DEVICE_OP_READ_DATA)
  | ({ type: "PARAM_VALUE" } & PARAM_VALUE_DATA)
  | ({ type: "CONTROL_SYSTEM_STATE" } & CONTROL_SYSTEM_STATE_DATA)
  | ({ type: "GIMBAL_TORQUE_CMD_REPORT" } & GIMBAL_TORQUE_CMD_REPORT_DATA)
  | ({ type: "MISSION_REQUEST" } & MISSION_REQUEST_DATA)
  | ({ type: "ESC_TELEMETRY_1_TO_4" } & ESC_TELEMETRY_1_TO_4_DATA)
  | ({ type: "PING" } & PING_DATA)
  | ({ type: "REMOTE_LOG_BLOCK_STATUS" } & REMOTE_LOG_BLOCK_STATUS_DATA)
  | ({ type: "WHEEL_DISTANCE" } & WHEEL_DISTANCE_DATA)
  | ({ type: "ESTIMATOR_STATUS" } & ESTIMATOR_STATUS_DATA)
  | ({ type: "FENCE_STATUS" } & FENCE_STATUS_DATA)
  | ({ type: "PARAM_EXT_ACK" } & PARAM_EXT_ACK_DATA)
  | ({ type: "SIMSTATE" } & SIMSTATE_DATA)
  | ({ type: "ATTITUDE_QUATERNION" } & ATTITUDE_QUATERNION_DATA)
  | ({ type: "FENCE_POINT" } & FENCE_POINT_DATA)
  | ({ type: "VIDEO_STREAM_STATUS" } & VIDEO_STREAM_STATUS_DATA)
  | ({ type: "SCALED_IMU2" } & SCALED_IMU2_DATA)
  | ({ type: "RAW_RPM" } & RAW_RPM_DATA)
  | ({ type: "AHRS" } & AHRS_DATA)
  | ({ type: "CAMERA_STATUS" } & CAMERA_STATUS_DATA)
  | ({ type: "TERRAIN_REPORT" } & TERRAIN_REPORT_DATA)
  | ({ type: "MEMINFO" } & MEMINFO_DATA)
  | ({ type: "AHRS2" } & AHRS2_DATA)
  | ({ type: "NAV_CONTROLLER_OUTPUT" } & NAV_CONTROLLER_OUTPUT_DATA)
  | ({ type: "MISSION_SET_CURRENT" } & MISSION_SET_CURRENT_DATA)
  | ({ type: "LOG_REQUEST_DATA" } & LOG_REQUEST_DATA_DATA)
  | ({ type: "GIMBAL_REPORT" } & GIMBAL_REPORT_DATA)
  | ({ type: "RC_CHANNELS" } & RC_CHANNELS_DATA)
  | ({ type: "AUTOPILOT_VERSION" } & AUTOPILOT_VERSION_DATA)
  | ({
      type: "GIMBAL_MANAGER_SET_MANUAL_CONTROL";
    } & GIMBAL_MANAGER_SET_MANUAL_CONTROL_DATA)
  | ({ type: "VISION_POSITION_ESTIMATE" } & VISION_POSITION_ESTIMATE_DATA)
  | ({ type: "SETUP_SIGNING" } & SETUP_SIGNING_DATA)
  | ({ type: "PARAM_EXT_REQUEST_LIST" } & PARAM_EXT_REQUEST_LIST_DATA)
  | ({ type: "SET_MAG_OFFSETS" } & SET_MAG_OFFSETS_DATA)
  | ({ type: "RPM" } & RPM_DATA)
  | ({ type: "SYS_STATUS" } & SYS_STATUS_DATA)
  | ({ type: "UAVCAN_NODE_STATUS" } & UAVCAN_NODE_STATUS_DATA)
  | ({ type: "GOPRO_SET_REQUEST" } & GOPRO_SET_REQUEST_DATA)
  | ({ type: "ISBD_LINK_STATUS" } & ISBD_LINK_STATUS_DATA)
  | ({ type: "LED_CONTROL" } & LED_CONTROL_DATA)
  | ({ type: "VISION_SPEED_ESTIMATE" } & VISION_SPEED_ESTIMATE_DATA)
  | ({ type: "CAN_FRAME" } & CAN_FRAME_DATA)
  | ({ type: "COMPASSMOT_STATUS" } & COMPASSMOT_STATUS_DATA)
  | ({ type: "MOUNT_CONFIGURE" } & MOUNT_CONFIGURE_DATA)
  | ({ type: "SCALED_PRESSURE" } & SCALED_PRESSURE_DATA)
  | ({ type: "ATT_POS_MOCAP" } & ATT_POS_MOCAP_DATA)
  | ({ type: "TERRAIN_DATA" } & TERRAIN_DATA_DATA)
  | ({ type: "HIGH_LATENCY2" } & HIGH_LATENCY2_DATA)
  | ({ type: "SYSTEM_TIME" } & SYSTEM_TIME_DATA)
  | ({ type: "RAW_PRESSURE" } & RAW_PRESSURE_DATA)
  | ({ type: "COLLISION" } & COLLISION_DATA)
  | ({ type: "COMPONENT_INFORMATION" } & COMPONENT_INFORMATION_DATA)
  | ({ type: "DEVICE_OP_WRITE_REPLY" } & DEVICE_OP_WRITE_REPLY_DATA)
  | ({ type: "SUPPORTED_TUNES" } & SUPPORTED_TUNES_DATA)
  | ({ type: "REQUEST_EVENT" } & REQUEST_EVENT_DATA)
  | ({ type: "ODOMETRY" } & ODOMETRY_DATA)
  | ({ type: "MISSION_ITEM_REACHED" } & MISSION_ITEM_REACHED_DATA)
  | ({ type: "MISSION_ACK" } & MISSION_ACK_DATA)
  | ({ type: "HYGROMETER_SENSOR" } & HYGROMETER_SENSOR_DATA)
  | ({ type: "RESPONSE_EVENT_ERROR" } & RESPONSE_EVENT_ERROR_DATA)
  | ({ type: "AIRSPEED_AUTOCAL" } & AIRSPEED_AUTOCAL_DATA)
  | ({ type: "CHANGE_OPERATOR_CONTROL" } & CHANGE_OPERATOR_CONTROL_DATA)
  | ({ type: "SET_GPS_GLOBAL_ORIGIN" } & SET_GPS_GLOBAL_ORIGIN_DATA)
  | ({ type: "FLIGHT_INFORMATION" } & FLIGHT_INFORMATION_DATA)
  | ({ type: "VFR_HUD" } & VFR_HUD_DATA)
  | ({ type: "MOUNT_ORIENTATION" } & MOUNT_ORIENTATION_DATA)
  | ({ type: "AUTH_KEY" } & AUTH_KEY_DATA)
  | ({ type: "ACTUATOR_CONTROL_TARGET" } & ACTUATOR_CONTROL_TARGET_DATA)
  | ({ type: "DISTANCE_SENSOR" } & DISTANCE_SENSOR_DATA)
  | ({ type: "UAVIONIX_ADSB_OUT_DYNAMIC" } & UAVIONIX_ADSB_OUT_DYNAMIC_DATA)
  | ({ type: "HIL_CONTROLS" } & HIL_CONTROLS_DATA)
  | ({ type: "OPEN_DRONE_ID_BASIC_ID" } & OPEN_DRONE_ID_BASIC_ID_DATA)
  | ({ type: "GIMBAL_MANAGER_INFORMATION" } & GIMBAL_MANAGER_INFORMATION_DATA)
  | ({ type: "GIMBAL_CONTROL" } & GIMBAL_CONTROL_DATA)
  | ({ type: "DEBUG_FLOAT_ARRAY" } & DEBUG_FLOAT_ARRAY_DATA)
  | ({ type: "GPS_INPUT" } & GPS_INPUT_DATA)
  | ({ type: "MISSION_ITEM_INT" } & MISSION_ITEM_INT_DATA)
  | ({ type: "HOME_POSITION" } & HOME_POSITION_DATA)
  | ({ type: "ADAP_TUNING" } & ADAP_TUNING_DATA)
  | ({ type: "OSD_PARAM_SHOW_CONFIG_REPLY" } & OSD_PARAM_SHOW_CONFIG_REPLY_DATA)
  | ({ type: "GPS_STATUS" } & GPS_STATUS_DATA)
  | ({ type: "SAFETY_SET_ALLOWED_AREA" } & SAFETY_SET_ALLOWED_AREA_DATA)
  | ({ type: "MISSION_WRITE_PARTIAL_LIST" } & MISSION_WRITE_PARTIAL_LIST_DATA)
  | ({ type: "OPEN_DRONE_ID_SYSTEM_UPDATE" } & OPEN_DRONE_ID_SYSTEM_UPDATE_DATA)
  | ({ type: "ALTITUDE" } & ALTITUDE_DATA)
  | ({ type: "GENERATOR_STATUS" } & GENERATOR_STATUS_DATA)
  | ({ type: "ENCAPSULATED_DATA" } & ENCAPSULATED_DATA_DATA)
  | ({ type: "OPEN_DRONE_ID_LOCATION" } & OPEN_DRONE_ID_LOCATION_DATA)
  | ({
      type: "CUBEPILOT_FIRMWARE_UPDATE_START";
    } & CUBEPILOT_FIRMWARE_UPDATE_START_DATA)
  | ({ type: "GOPRO_HEARTBEAT" } & GOPRO_HEARTBEAT_DATA)
  | ({ type: "GOPRO_GET_RESPONSE" } & GOPRO_GET_RESPONSE_DATA)
  | ({ type: "MAG_CAL_PROGRESS" } & MAG_CAL_PROGRESS_DATA)
  | ({ type: "OSD_PARAM_SHOW_CONFIG" } & OSD_PARAM_SHOW_CONFIG_DATA)
  | ({ type: "V2_EXTENSION" } & V2_EXTENSION_DATA)
  | ({ type: "ORBIT_EXECUTION_STATUS" } & ORBIT_EXECUTION_STATUS_DATA)
  | ({ type: "VIDEO_STREAM_INFORMATION" } & VIDEO_STREAM_INFORMATION_DATA)
  | ({ type: "PARAM_MAP_RC" } & PARAM_MAP_RC_DATA)
  | ({ type: "GIMBAL_MANAGER_STATUS" } & GIMBAL_MANAGER_STATUS_DATA)
  | ({ type: "MCU_STATUS" } & MCU_STATUS_DATA)
  | ({ type: "GPS_INJECT_DATA" } & GPS_INJECT_DATA_DATA)
  | ({ type: "BUTTON_CHANGE" } & BUTTON_CHANGE_DATA)
  | ({
      type: "CUBEPILOT_FIRMWARE_UPDATE_RESP";
    } & CUBEPILOT_FIRMWARE_UPDATE_RESP_DATA)
  | ({ type: "CAMERA_TRACKING_GEO_STATUS" } & CAMERA_TRACKING_GEO_STATUS_DATA)
  | ({ type: "VISION_POSITION_DELTA" } & VISION_POSITION_DELTA_DATA)
  | ({ type: "GIMBAL_DEVICE_INFORMATION" } & GIMBAL_DEVICE_INFORMATION_DATA)
  | ({ type: "DIGICAM_CONFIGURE" } & DIGICAM_CONFIGURE_DATA)
  | ({ type: "PID_TUNING" } & PID_TUNING_DATA)
  | ({ type: "CAMERA_TRIGGER" } & CAMERA_TRIGGER_DATA)
  | ({ type: "OPEN_DRONE_ID_OPERATOR_ID" } & OPEN_DRONE_ID_OPERATOR_ID_DATA)
  | ({ type: "VIBRATION" } & VIBRATION_DATA)
  | ({ type: "ATTITUDE_TARGET" } & ATTITUDE_TARGET_DATA)
  | ({ type: "GIMBAL_MANAGER_SET_PITCHYAW" } & GIMBAL_MANAGER_SET_PITCHYAW_DATA)
  | ({ type: "EKF_STATUS_REPORT" } & EKF_STATUS_REPORT_DATA)
  | ({ type: "MANUAL_CONTROL" } & MANUAL_CONTROL_DATA)
  | ({ type: "SET_MODE" } & SET_MODE_DATA)
  | ({ type: "RESOURCE_REQUEST" } & RESOURCE_REQUEST_DATA)
  | ({ type: "MANUAL_SETPOINT" } & MANUAL_SETPOINT_DATA)
  | ({ type: "CELLULAR_CONFIG" } & CELLULAR_CONFIG_DATA)
  | ({ type: "DATA16" } & DATA16_DATA)
  | ({ type: "WATER_DEPTH" } & WATER_DEPTH_DATA)
  | ({ type: "ATTITUDE_QUATERNION_COV" } & ATTITUDE_QUATERNION_COV_DATA)
  | ({ type: "RANGEFINDER" } & RANGEFINDER_DATA)
  | ({ type: "LOG_ERASE" } & LOG_ERASE_DATA)
  | ({ type: "HEARTBEAT" } & HEARTBEAT_DATA)
  | ({ type: "COMMAND_CANCEL" } & COMMAND_CANCEL_DATA)
  | ({ type: "POSITION_TARGET_LOCAL_NED" } & POSITION_TARGET_LOCAL_NED_DATA)
  | ({
      type: "SET_POSITION_TARGET_LOCAL_NED";
    } & SET_POSITION_TARGET_LOCAL_NED_DATA)
  | ({ type: "OBSTACLE_DISTANCE" } & OBSTACLE_DISTANCE_DATA)
  | ({ type: "CANFD_FRAME" } & CANFD_FRAME_DATA)
  | ({ type: "ESC_STATUS" } & ESC_STATUS_DATA)
  | ({ type: "AIS_VESSEL" } & AIS_VESSEL_DATA)
  | ({ type: "GPS2_RTK" } & GPS2_RTK_DATA)
  | ({
      type: "GLOBAL_VISION_POSITION_ESTIMATE";
    } & GLOBAL_VISION_POSITION_ESTIMATE_DATA)
  | ({ type: "EFI_STATUS" } & EFI_STATUS_DATA)
  | ({ type: "ESC_TELEMETRY_9_TO_12" } & ESC_TELEMETRY_9_TO_12_DATA)
  | ({ type: "HWSTATUS" } & HWSTATUS_DATA)
  | ({ type: "OPEN_DRONE_ID_MESSAGE_PACK" } & OPEN_DRONE_ID_MESSAGE_PACK_DATA)
  | ({ type: "CAMERA_INFORMATION" } & CAMERA_INFORMATION_DATA)
  | ({ type: "LINK_NODE_STATUS" } & LINK_NODE_STATUS_DATA)
  | ({ type: "STORAGE_INFORMATION" } & STORAGE_INFORMATION_DATA)
  | ({ type: "CAN_FILTER_MODIFY" } & CAN_FILTER_MODIFY_DATA)
  | ({ type: "DEBUG" } & DEBUG_DATA)
  | ({
      type: "AUTOPILOT_STATE_FOR_GIMBAL_DEVICE";
    } & AUTOPILOT_STATE_FOR_GIMBAL_DEVICE_DATA)
  | ({ type: "CURRENT_EVENT_SEQUENCE" } & CURRENT_EVENT_SEQUENCE_DATA)
  | ({ type: "VICON_POSITION_ESTIMATE" } & VICON_POSITION_ESTIMATE_DATA)
  | ({ type: "OPEN_DRONE_ID_SELF_ID" } & OPEN_DRONE_ID_SELF_ID_DATA)
  | ({ type: "AOA_SSA" } & AOA_SSA_DATA)
  | ({ type: "WIFI_CONFIG_AP" } & WIFI_CONFIG_AP_DATA)
  | ({ type: "SERIAL_CONTROL" } & SERIAL_CONTROL_DATA)
  | ({ type: "WINCH_STATUS" } & WINCH_STATUS_DATA)
  | ({ type: "RALLY_POINT" } & RALLY_POINT_DATA)
  | ({ type: "WIND_COV" } & WIND_COV_DATA)
  | ({ type: "GPS_GLOBAL_ORIGIN" } & GPS_GLOBAL_ORIGIN_DATA)
  | ({ type: "GPS_RTCM_DATA" } & GPS_RTCM_DATA_DATA)
  | ({ type: "MISSION_REQUEST_LIST" } & MISSION_REQUEST_LIST_DATA)
  | ({ type: "RC_CHANNELS_OVERRIDE" } & RC_CHANNELS_OVERRIDE_DATA)
  | ({ type: "NAMED_VALUE_INT" } & NAMED_VALUE_INT_DATA)
  | ({ type: "MISSION_ITEM" } & MISSION_ITEM_DATA)
  | ({ type: "NAMED_VALUE_FLOAT" } & NAMED_VALUE_FLOAT_DATA)
  | ({ type: "ICAROUS_HEARTBEAT" } & ICAROUS_HEARTBEAT_DATA)
  | ({ type: "PARAM_EXT_VALUE" } & PARAM_EXT_VALUE_DATA)
  | ({ type: "CAMERA_SETTINGS" } & CAMERA_SETTINGS_DATA)
  | ({ type: "EVENT" } & EVENT_DATA)
  | ({ type: "MESSAGE_INTERVAL" } & MESSAGE_INTERVAL_DATA)
  | ({ type: "SCALED_IMU3" } & SCALED_IMU3_DATA)
  | ({
      type: "SET_ACTUATOR_CONTROL_TARGET";
    } & SET_ACTUATOR_CONTROL_TARGET_DATA);
