import { ResponseMetaData } from "../models/meta";
import { LargeStation } from "../models/station";

export interface GetStation {
  meta: ResponseMetaData;
  data: LargeStation;
}
