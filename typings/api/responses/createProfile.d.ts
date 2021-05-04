import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateLargeProfileMock, LargeProfile } from "../models/profile";

export interface CreateProfile {
  meta: ResponseMetaData;
  data: LargeProfile;
}

// This function generates a mock model
// based other mock models and returns
// it as instance of CreateProfile
export function generateCreateProfileMock(): CreateProfile {
  return {
    meta: generateMetaMock(),
    data: generateLargeProfileMock()
  } as CreateProfile;
}
