import { LargeMission, SmallMission } from "typings/api/models/mission";

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
