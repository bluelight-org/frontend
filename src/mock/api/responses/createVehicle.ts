import { CreateVehicle } from "../../../../typings/api/responses/createVehicle";
import { generateMetaMock } from "@/mock/api/models/meta";
import { generateVehicleMock } from "@/mock/api/models/vehicle";

// This function generates a mock model
// based other mock models and returns
// it as instance of CreateVehicle
export function generateCreateVehicleMock(): CreateVehicle {
  return {
    meta: generateMetaMock(),
    data: generateVehicleMock()
  } as CreateVehicle;
}
