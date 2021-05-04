/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateVehicleMock, Vehicle } from "../models/vehicle";

export interface CreateVehicle {
  meta: ResponseMetaData;
  data: Vehicle;
}

// This function generates a mock model
// based other mock models and returns
// it as instance of CreateVehicle
export function generateCreateVehicleMock(): CreateVehicle {
  return {
    meta: generateMetaMock(),
    data: generateVehicleMock()
  } as CreateVehicle;
}
