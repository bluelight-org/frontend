import { CreateStation } from "../../../../typings/api/responses/createStation";
import { generateMetaMock } from "@/mock/api/models/meta";
import { generateLargeStationMock } from "@/mock/api/models/station";

// This function generates a mock model
// based other mock models and returns
// it as instance of CreateStation
export function generateCreateStationMock(): CreateStation {
  return {
    meta: generateMetaMock(),
    data: generateLargeStationMock()
  } as CreateStation;
}
