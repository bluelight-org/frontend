import { ResponseMetaData } from "../models/meta";
import { LargeStation } from "../models/station";

export interface CreateStation {
  meta: ResponseMetaData;
  data: LargeStation;
}
