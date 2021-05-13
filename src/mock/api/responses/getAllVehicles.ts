import { GetAllVehicles } from "../../../../typings/api/responses/getAllVehicles";
import { generateMetaMock } from "@/mock/api/models/meta";
import { generateVehicleMock } from "@/mock/api/models/vehicle";

// This function generates a mock model
// based other mock models and returns
// it as instance of GetAllVehicles
export function generateGetAllVehiclesMock(): GetAllVehicles {
  return {
    meta: generateMetaMock(),
    data: [generateVehicleMock()]
  } as GetAllVehicles;
}
