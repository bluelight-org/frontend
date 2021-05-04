/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateLargeStationMock, LargeStation } from "../models/station";

export interface CreateStation {
  meta: ResponseMetaData;
  data: LargeStation;
}

// This function generates a mock model
// based other mock models and returns
// it as instance of CreateStation
export function generateCreateStationMock(): CreateStation {
  return {
    meta: generateMetaMock(),
    data: generateLargeStationMock()
  } as CreateStation;
}
