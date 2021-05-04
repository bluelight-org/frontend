import { ResponseMetaData } from "../models/meta";
import { Vehicle } from "../models/vehicle";

export interface CreateVehicle {
  meta: ResponseMetaData;
  data: Vehicle;
}
