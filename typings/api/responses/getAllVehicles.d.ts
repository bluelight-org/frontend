/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateVehicleMock, Vehicle } from "../models/vehicle";

export interface GetAllVehicles {
  meta: ResponseMetaData;
  data: Vehicle[];
}

// This function generates a mock model
// based other mock models and returns
// it as instance of GetAllVehicles
export function generateGetAllVehiclesMock(): GetAllVehicles {
  return {
    meta: generateMetaMock(),
    data: [generateVehicleMock()]
  } as GetAllVehicles;
}
