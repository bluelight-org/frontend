/* eslint-disable */

import { RestServiceInterface } from "../../../typings/RestServiceInterface";
import { ErrorResponse } from "../../../typings/api/responses/ErrorResponse";
import { CreateProfile } from "../../../typings/api/responses/createProfile";
import { CreateStation } from "../../../typings/api/responses/createStation";
import { CreateVehicle } from "../../../typings/api/responses/createVehicle";
import { CreateMission } from "../../../typings/api/responses/createMission";
import { GetAllMissionsResponse } from "../../../typings/api/responses/getAllMissions";
import { GetAllStations } from "../../../typings/api/responses/getAllStations";
import { GetAllVehicles } from "../../../typings/api/responses/getAllVehicles";
import { GetMission } from "../../../typings/api/responses/getMission";
import { GetStation } from "../../../typings/api/responses/getStation";
import { UpdateProfile } from "../../../typings/api/responses/updateProfile";
import { UpdateStation } from "../../../typings/api/responses/updateStation";
import { UpdateMission } from "../../../typings/api/responses/updateMission";

// wrapper for the API
export class RestAPIService implements RestServiceInterface {

  async login(username: string, password: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  async register(
    username: string,
    password: string,
    retypePassword: string
  ): Promise<[boolean, string]> {
    throw new Error("Method not implemented.");
  }

  createMission(address: string, latitude: number, longitude: number, keyword: string, details: string, vehicles: number[]): Promise<CreateMission | ErrorResponse> {
    throw new Error("Method not implemented.");
  }

  createProfile(name: string, email: string, password: string): Promise<CreateProfile | ErrorResponse> {
    throw new Error("Method not implemented.");
  }

  createStation(name: string, latitude: number, longitude: number): Promise<CreateStation | ErrorResponse> {
    throw new Error("Method not implemented.");
  }

  createVehicle(station_id: number, name: string, type: string): Promise<CreateVehicle | ErrorResponse> {
    throw new Error("Method not implemented.");
  }

  deleteAllMissions(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  deleteAllStations(): Promise<null> {
    throw new Error("Method not implemented.");
  }

  deleteAllVehicles(station_id: number): Promise<ErrorResponse | null> {
    throw new Error("Method not implemented.");
  }

  deleteMission(id: number): Promise<ErrorResponse | null> {
    throw new Error("Method not implemented.");
  }

  deleteProfile(): Promise<null> {
    throw new Error("Method not implemented.");
  }

  deleteStation(id: number): Promise<ErrorResponse | null> {
    throw new Error("Method not implemented.");
  }

  getAllMissions(): Promise<GetAllMissionsResponse> {
    throw new Error("Method not implemented.");
  }

  getAllStations(): Promise<GetAllStations> {
    throw new Error("Method not implemented.");
  }

  getAllVehicles(station_id: number): Promise<GetAllVehicles | ErrorResponse> {
    throw new Error("Method not implemented.");
  }

  getMission(id: number): Promise<GetMission | ErrorResponse> {
    throw new Error("Method not implemented.");
  }

  getStation(id: number): Promise<GetStation | ErrorResponse> {
    throw new Error("Method not implemented.");
  }

  updateMission(address: string, latitude: number, longitude: number, keyword: string, details: string, vehicles: number[], alerted: boolean): Promise<UpdateMission | ErrorResponse> {
    throw new Error("Method not implemented.");
  }

  updateProfile(name: string, email: string): Promise<UpdateProfile | ErrorResponse> {
    throw new Error("Method not implemented.");
  }

  updateStation(name: string, latitude: number, longitude: number): Promise<UpdateStation | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
}
