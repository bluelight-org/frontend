/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateLargeMissionMock, LargeMission } from "../models/mission";

export interface GetMission {
  meta: ResponseMetaData;
  data: LargeMission;
}

// This function generates a mock model
// based other mock models and returns
// it as instance of GetMission
export function generateGetMissionMock(): GetMission {
  return {
    meta: generateMetaMock(),
    data: generateLargeMissionMock()
  } as GetMission;
}
