import { GetAllMissionsResponse } from "../../../../typings/api/responses/getAllMissions";
import { generateSmallMission } from "@/mock/api/models/mission";
import { generateMetaMock } from "@/mock/api/models/meta";

// This function generates a mock model
// based other mock models and returns
// it as instance of GetAllMissionsResponse
export function generateGetAllMissionsResponseMock(): GetAllMissionsResponse {
  return {
    meta: generateMetaMock(),
    data: [generateSmallMission()]
  } as GetAllMissionsResponse;
}
