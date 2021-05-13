import { CreateProfile } from "../../../../typings/api/responses/createProfile";
import { generateMetaMock } from "@/mock/api/models/meta";
import { generateLargeProfileMock } from "@/mock/api/models/profile";

// This function generates a mock model
// based other mock models and returns
// it as instance of CreateProfile
export function generateCreateProfileMock(): CreateProfile {
  return {
    meta: generateMetaMock(),
    data: generateLargeProfileMock()
  } as CreateProfile;
}
