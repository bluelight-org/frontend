import { UpdateStation } from "../../../../typings/api/responses/updateStation";
import { generateLargeStationMock } from "@/mock/api/models/station";
import { generateMetaMock } from "@/mock/api/models/meta";

// This function generates a mock model
// based other mock models and returns
// it as instance of UpdateStation
export function generateUpdateStationMock(): UpdateStation {
  return {
    meta: generateMetaMock(),
    data: generateLargeStationMock()
  } as UpdateStation;
}
