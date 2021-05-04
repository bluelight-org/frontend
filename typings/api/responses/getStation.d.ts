/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateLargeStationMock, LargeStation } from "../models/station";

export interface GetStation {
  meta: ResponseMetaData;
  data: LargeStation;
}

// This function generates a mock model
// based other mock models and returns
// it as instance of GetStation
export function generateGetStationMock(): GetStation {
  return {
    meta: generateMetaMock(),
    data: generateLargeStationMock()
  } as GetStation;
}
