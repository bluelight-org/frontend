import { ResponseMetaData } from "../models/meta";
import { SmallProfile } from "../models/profile";

export interface UpdateProfile {
  meta: ResponseMetaData;
  data: SmallProfile;
}
