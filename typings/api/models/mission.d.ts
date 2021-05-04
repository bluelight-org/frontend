/* eslint-disable */

export interface SmallMission {
  id: number;
  keyword: string;
  alerted: boolean;
}

export interface LargeMission {
  id: number;
  address: string;
  latitude: number;
  longitude: number;
  keyword: string;
  details: string;
  vehicles: number[];
  alerted: boolean;
  alertTime: string;
}

// This function generates a mock value of
// the SmallMission type
export function generateSmallMission(): SmallMission {
  return {
    id: 1,
    keyword: "keyword",
    alerted: true
  } as SmallMission;
}

// This function generates a mock value of
// the LargeMission type
export function generateLargeMissionMock(): LargeMission {
  return {
    id: 1,
    address: "test address",
    latitude: 10,
    longitude: 10,
    keyword: "Fire",
    details: "none",
    vehicles: [1, 2, 3],
    alerted: true,
    alertTime: new Date().toDateString()
  } as LargeMission;
}
