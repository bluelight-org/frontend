// Interface for REST services

import { GetAllMissionsResponse } from "./api/responses/getAllMissions";
import { ErrorResponse } from "./api/responses/ErrorResponse";
import { CreateMission } from "./api/responses/createMission";
import { GetMission } from "./api/responses/getMission";
import { UpdateStation } from "./api/responses/updateStation";
import { UpdateProfile } from "./api/responses/updateProfile";
import { CreateProfile } from "./api/responses/createProfile";
import { GetAllStations } from "./api/responses/getAllStations";
import { CreateStation } from "./api/responses/createStation";
import { GetStation } from "./api/responses/getStation";
import { GetAllVehicles } from "./api/responses/getAllVehicles";
import { CreateVehicle } from "./api/responses/createVehicle";
import { UpdateMission } from "./api/responses/updateMission";

export interface RestServiceInterface {
  login(username: string, password: string): Promise<boolean>;
  register(
    username: string,
    password: string,
    retypePassword: string
  ): Promise<[boolean, string]>;
  deleteAllMissions(): Promise<boolean>;
  getAllMissions(): Promise<GetAllMissionsResponse>;
  createMission(
    address: string,
    latitude: number,
    longitude: number,
    keyword: string,
    details: string,
    vehicles: number[]
  ): Promise<CreateMission | ErrorResponse>;
  deleteMission(id: number): Promise<null | ErrorResponse>;
  getMission(id: number): Promise<GetMission | ErrorResponse>;
  updateMission(
    address: string,
    latitude: number,
    longitude: number,
    keyword: string,
    details: string,
    vehicles: number[],
    alerted: boolean
  ): Promise<UpdateMission | ErrorResponse>;
  deleteProfile(): Promise<null>;
  updateProfile(
    name: string,
    email: string
  ): Promise<UpdateProfile | ErrorResponse>;
  createProfile(
    name: string,
    email: string,
    password: string
  ): Promise<CreateProfile | ErrorResponse>;
  deleteAllStations(): Promise<null>;
  getAllStations(): Promise<GetAllStations>;
  createStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<CreateStation | ErrorResponse>;
  deleteStation(id: number): Promise<null | ErrorResponse>;
  getStation(id: number): Promise<GetStation | ErrorResponse>;
  updateStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<UpdateStation | ErrorResponse>;
  deleteAllVehicles(station_id: number): Promise<null | ErrorResponse>;
  getAllVehicles(station_id: number): Promise<GetAllVehicles | ErrorResponse>;
  createVehicle(
    station_id: number,
    name: string,
    type: string
  ): Promise<CreateVehicle | ErrorResponse>;
}
