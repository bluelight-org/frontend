import { GetAllStations } from "../../../../typings/api/responses/getAllStations";
import { generateMetaMock } from "@/mock/api/models/meta";
import { generateSmallStationMock } from "@/mock/api/models/station";

// This function generates a mock model
// based other mock models and returns
// it as instance of GetAllStations
export function generateGetAllStationsMock(): GetAllStations {
  return {
    meta: generateMetaMock(),
    data: [generateSmallStationMock()]
  } as GetAllStations;
}
