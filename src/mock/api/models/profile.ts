import { LargeProfile, SmallProfile } from "typings/api/models/profile";

// This function generates a mock
// instance of the SmallProfile type
export function generateSmallProfileMock(): SmallProfile {
  return {
    name: "name",
    email: "test@test.de"
  } as SmallProfile;
}

// This function generates a mock
// instance of the LargeProfile type
export function generateLargeProfileMock(): LargeProfile {
  return {
    name: "name",
    email: "test@test.de",
    api_key: "api-key"
  } as LargeProfile;
}
