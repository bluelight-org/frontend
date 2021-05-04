/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateLargeMissionMock, LargeMission } from "../models/mission";

export interface UpdateMission {
  meta: ResponseMetaData;
  data: LargeMission;
}

// This function generates a mock model
// based other mock models and returns
// it as instance of UpdateMission
export function generateUpdateMissionMock(): UpdateMission {
  return {
    meta: generateMetaMock(),
    data: generateLargeMissionMock()
  } as UpdateMission;
}
