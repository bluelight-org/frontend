/* eslint-disable */

export interface Vehicle {
  id: number;
  fms: number;
  name: string;
  type: string;
}

// This function generates a mock model
// based other mock models and returns
// it as instance of Vehicle
export function generateVehicleMock(): Vehicle {
  return {
    id: 1,
    fms: 1,
    name: "name",
    type: "type"
  } as Vehicle;
}
