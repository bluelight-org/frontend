/* eslint-disable */
import { ResponseMetaData } from "../models/meta";
import { generateLargeStationMock, LargeStation } from "../models/station";

export interface UpdateStation {
  meta: ResponseMetaData;
  data: LargeStation;
}

// This function generates a mock model
// based other mock models and returns
// it as instance of UpdateStation
export function generateUpdateStationMock(): UpdateStation {
  return {
    meta: generateUpdateStationMock(),
    data: generateLargeStationMock()
  } as UpdateStation;
}
