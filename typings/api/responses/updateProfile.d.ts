/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateSmallProfileMock, SmallProfile } from "../models/profile";

export interface UpdateProfile {
  meta: ResponseMetaData;
  data: SmallProfile;
}

// This function generates a mock model
// based other mock models and returns
// it as instance of UpdateProfile
export function generateUpdateProfileMock(): UpdateProfile {
  return {
    meta: generateMetaMock(),
    data: generateSmallProfileMock()
  } as UpdateProfile;
}
