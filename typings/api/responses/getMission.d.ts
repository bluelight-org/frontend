import { ResponseMetaData } from "../models/meta";
import { LargeMission } from "../models/mission";

export interface GetMission {
  meta: ResponseMetaData;
  data: LargeMission;
}
