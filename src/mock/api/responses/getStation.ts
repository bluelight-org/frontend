import { GetStation } from "../../../../typings/api/responses/getStation";
import { generateMetaMock } from "@/mock/api/models/meta";
import { generateLargeStationMock } from "@/mock/api/models/station";

// This function generates a mock model
// based other mock models and returns
// it as instance of GetStation
export function generateGetStationMock(): GetStation {
  return {
    meta: generateMetaMock(),
    data: generateLargeStationMock()
  } as GetStation;
}
