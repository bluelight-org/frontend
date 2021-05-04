import { ResponseMetaData } from "../models/meta";
import { SmallStation } from "../models/station";

export interface GetAllStations {
  meta: ResponseMetaData;
  data: SmallStation[];
}
