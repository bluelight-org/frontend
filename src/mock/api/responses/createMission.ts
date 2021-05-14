import { generateMetaMock } from "@/mock/api/models/meta";
import { generateLargeMissionMock } from "@/mock/api/models/mission";
import { CreateMission } from "../../../../typings/api/responses/createMission";

// This function generates a mock model based
// on the other mock models
export function generateCreateMissionMock(): CreateMission {
  return {
    meta: generateMetaMock(),
    data: generateLargeMissionMock()
  } as CreateMission;
}
