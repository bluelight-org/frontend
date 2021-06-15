import { Vehicle } from "../api/models/vehicle";

export interface AlertData {
  navbarColor: string;
}

export interface AlertsMethods {
  getAvailibleVehicles(): Vehicle[];
}
