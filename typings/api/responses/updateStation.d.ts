import { ResponseMetaData } from "../models/meta";
import { LargeStation } from "../models/station";

export interface UpdateStation {
  meta: ResponseMetaData;
  data: LargeStation;
}
