import { ResponseMetaData } from "../models/meta";
import { Vehicle } from "../models/vehicle";

export interface GetAllVehicles {
  meta: ResponseMetaData;
  data: Vehicle[];
}
