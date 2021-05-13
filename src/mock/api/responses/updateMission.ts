import { UpdateMission } from "../../../../typings/api/responses/updateMission";
import { generateMetaMock } from "@/mock/api/models/meta";
import { generateLargeMissionMock } from "@/mock/api/models/mission";

// This function generates a mock model
// based other mock models and returns
// it as instance of UpdateMission
export function generateUpdateMissionMock(): UpdateMission {
  return {
    meta: generateMetaMock(),
    data: generateLargeMissionMock()
  } as UpdateMission;
}
