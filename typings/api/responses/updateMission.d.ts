import { ResponseMetaData } from "../models/meta";
import { LargeMission } from "../models/mission";

export interface UpdateMission {
  meta: ResponseMetaData;
  data: LargeMission;
}
