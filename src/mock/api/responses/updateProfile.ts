import { UpdateProfile } from "../../../../typings/api/responses/updateProfile";
import { generateMetaMock } from "@/mock/api/models/meta";
import { generateSmallProfileMock } from "@/mock/api/models/profile";

// This function generates a mock model
// based other mock models and returns
// it as instance of UpdateProfile
export function generateUpdateProfileMock(): UpdateProfile {
  return {
    meta: generateMetaMock(),
    data: generateSmallProfileMock()
  } as UpdateProfile;
}
