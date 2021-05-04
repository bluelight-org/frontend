export interface SmallStation {
  id: number;
  name: string;
}

export interface LargeStation {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

// This function generates a mock
// instance of the LargeStation type
export function generateLargeStationMock(): LargeStation {
  return {
    id: 0,
    name: "name",
    latitude: 10,
    longitude: 10
  } as LargeStation;
}
