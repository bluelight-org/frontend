/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateLargeMissionMock, LargeMission } from "../models/mission";

export interface CreateMission {
  meta: ResponseMetaData;
  data: LargeMission;
}

// This function generates a mock model based
// on the other mock models
export function generateCreateMissionMock(): CreateMission {
  return {
    meta: generateMetaMock(),
    data: generateLargeMissionMock()
  } as CreateMission;
}
