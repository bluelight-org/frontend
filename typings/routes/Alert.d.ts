import { RestService } from "./../../src/services/RestService";
import { Vehicle } from "../api/models/vehicle";

export interface AlertData {
  navbarColor: string;
  APISerice: RestService;
}

export interface AlertMethods {
  /**
   * Gets all available vehicles
   */
  getAvailibleVehicles(): Promise<Vehicle[]>;
}
