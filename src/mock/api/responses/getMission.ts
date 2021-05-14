import { GetMission } from "../../../../typings/api/responses/getMission";
import { generateMetaMock } from "@/mock/api/models/meta";
import { generateLargeMissionMock } from "@/mock/api/models/mission";

// This function generates a mock model
// based other mock models and returns
// it as instance of GetMission
export function generateGetMissionMock(): GetMission {
  return {
    meta: generateMetaMock(),
    data: generateLargeMissionMock()
  } as GetMission;
}
