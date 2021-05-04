export interface SmallProfile {
  name: string;
  email: string;
}

export interface LargeProfile {
  name: string;
  email: string;
  api_key: string;
}

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
