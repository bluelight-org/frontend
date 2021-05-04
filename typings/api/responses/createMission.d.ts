import { ResponseMetaData } from "../models/meta";
import { LargeMission } from "../models/mission";

export interface CreateMission {
  meta: ResponseMetaData;
  data: LargeMission;
}
