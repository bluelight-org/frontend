import { ResponseMetaData } from "../models/meta";
import { LargeProfile } from "../models/profile";

export interface CreateProfile {
  meta: ResponseMetaData;
  data: LargeProfile;
}
