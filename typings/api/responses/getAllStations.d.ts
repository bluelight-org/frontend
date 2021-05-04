import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { SmallStation } from "../models/station";
import { generateSmallMission } from "../models/mission";

export interface GetAllStations {
  meta: ResponseMetaData;
  data: SmallStation[];
}

// This function generates a mock model
// based other mock models and returns
// it as instance of GetAllStations
export function generateGetAllStationsMock(): GetAllStations {
  return {
    meta: generateMetaMock(),
    data: [generateSmallMission()]
  } as GetAllStations;
}
