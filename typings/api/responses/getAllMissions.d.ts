/* eslint-disable */
import { generateSmallMission, SmallMission } from "../models/mission";
import { ResponseMetaData } from "../models/meta";

export interface GetAllMissionsResponse {
  meta: ResponseMetaData;
  data: SmallMission[];
}

// This function generates a mock model
// based other mock models and returns
// it as instance of GetAllMissionsResponse
export function generateGetAllMissionsResponseMock(): GetAllMissionsResponse {
  return {
    meta: generateGetAllMissionsResponseMock(),
    data: [generateSmallMission()]
  } as SmallMission;
}
