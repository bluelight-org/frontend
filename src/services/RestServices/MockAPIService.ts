/* eslint-disable */
import { RestServiceInterface } from "../../../typings/RestServiceInterface";
import { ErrorResponse } from "../../../typings/api/responses/ErrorResponse";
import { CreateMission } from "../../../typings/api/responses/createMission";
import { generateCreateMissionMock } from "@/mock/api/responses/createMission";
import { CreateProfile } from "../../../typings/api/responses/createProfile";
import { generateCreateProfileMock } from "@/mock/api/responses/createProfile";
import { CreateStation } from "../../../typings/api/responses/createStation";
import { generateCreateStationMock } from "@/mock/api/responses/createStation";
import { CreateVehicle } from "../../../typings/api/responses/createVehicle";
import { generateCreateVehicleMock } from "@/mock/api/responses/createVehicle";
import { GetAllMissionsResponse } from "../../../typings/api/responses/getAllMissions";
import { generateGetAllMissionsResponseMock } from "@/mock/api/responses/getAllMissions";
import { GetAllStations } from "../../../typings/api/responses/getAllStations";
import { generateGetAllStationsMock } from "@/mock/api/responses/getAllStations";
import { GetAllVehicles } from "../../../typings/api/responses/getAllVehicles";
import { generateGetAllVehiclesMock } from "@/mock/api/responses/getAllVehicles";
import { GetMission } from "../../../typings/api/responses/getMission";
import { generateGetMissionMock } from "@/mock/api/responses/getMission";
import { GetStation } from "../../../typings/api/responses/getStation";
import { generateGetStationMock } from "@/mock/api/responses/getStation";
import { UpdateMission } from "../../../typings/api/responses/updateMission";
import { generateUpdateMissionMock } from "@/mock/api/responses/updateMission";
import { UpdateProfile } from "../../../typings/api/responses/updateProfile";
import { generateUpdateProfileMock } from "@/mock/api/responses/updateProfile";
import { UpdateStation } from "../../../typings/api/responses/updateStation";
import { generateUpdateStationMock } from "@/mock/api/responses/updateStation";

/**
 * Simulates API responses for the development process
 */
export class MockAPIService implements RestServiceInterface {
  /**
   * @inheritDoc
   */
  async login(username: string, password: string): Promise<boolean> {
    if(username === "root" && password === "Admin123") {
      localStorage.setItem("accessToken", "root");
    }
    return username == "root" && password == "Admin123";
  }

  /**
   * @inheritDoc
   */
  async register(
    username: string,
    password: string,
    retypePassword: string
  ): Promise<[boolean, string]> {
    return [password === retypePassword, username];
  }

  /**
   * @inheritDoc
   */
  createMission(
    address: string,
    latitude: number,
    longitude: number,
    keyword: string,
    details: string,
    vehicles: number[]
  ): Promise<CreateMission | ErrorResponse> {
    return new Promise<CreateMission | ErrorResponse>(() =>
      generateCreateMissionMock()
    );
  }
  /**
   * @inheritDoc
   */
  createProfile(
    name: string,
    email: string,
    password: string
  ): Promise<CreateProfile | ErrorResponse> {
    return new Promise<CreateProfile | ErrorResponse>(() =>
      generateCreateProfileMock()
    );
  }
  /**
   * @inheritDoc
   */
  createStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<CreateStation | ErrorResponse> {
    return new Promise<CreateStation | ErrorResponse>(() =>
      generateCreateStationMock()
    );
  }
  /**
   * @inheritDoc
   */
  createVehicleOnStation(
    station_id: number,
    name: string,
    type: string
  ): Promise<CreateVehicle | ErrorResponse> {
    return new Promise<CreateVehicle | ErrorResponse>(() =>
      generateCreateVehicleMock()
    );
  }
  /**
   * @inheritDoc
   */
  deleteAllMissions(): Promise<boolean> {
    return Promise.resolve(false);
  }
  /**
   * @inheritDoc
   */
  deleteAllStations(): Promise<null> {
    return Promise.resolve(null);
  }
  /**
   * @inheritDoc
   */
  deleteAllVehiclesOfStation(station_id: number): Promise<ErrorResponse | null> {
    return Promise.resolve(null);
  }
  /**
   * @inheritDoc
   */
  deleteMission(id: number): Promise<ErrorResponse | null> {
    return Promise.resolve(null);
  }
  /**
   * @inheritDoc
   */
  deleteProfile(): Promise<null> {
    return Promise.resolve(null);
  }
  /**
   * @inheritDoc
   */
  deleteStation(id: number): Promise<ErrorResponse | null> {
    return Promise.resolve(null);
  }
  /**
   * @inheritDoc
   */
  getAllMissions(): Promise<GetAllMissionsResponse> {
    return new Promise<GetAllMissionsResponse>(() =>
      generateGetAllMissionsResponseMock()
    );
  }
  /**
   * @inheritDoc
   */
  getAllStations(): Promise<GetAllStations> {
    return new Promise<GetAllStations>(() => generateGetAllStationsMock());
  }
  /**
   * @inheritDoc
   */
  getAllVehiclesOfStation(station_id: number): Promise<GetAllVehicles | ErrorResponse> {
    return new Promise<GetAllVehicles | ErrorResponse>(() =>
      generateGetAllVehiclesMock()
    );
  }
  /**
   * @inheritDoc
   */
  getMission(id: number): Promise<GetMission | ErrorResponse> {
    return new Promise<GetMission | ErrorResponse>(() =>
      generateGetMissionMock()
    );
  }
  /**
   * @inheritDoc
   */
  getStation(id: number): Promise<GetStation | ErrorResponse> {
    return new Promise<GetStation | ErrorResponse>(() =>
      generateGetStationMock()
    );
  }
  /**
   * @inheritDoc
   */
  updateMission(
    address: string,
    latitude: number,
    longitude: number,
    keyword: string,
    details: string,
    vehicles: number[],
    alerted: boolean
  ): Promise<UpdateMission | ErrorResponse> {
    return new Promise<UpdateMission | ErrorResponse>(() =>
      generateUpdateMissionMock()
    );
  }
  /**
   * @inheritDoc
   */
  updateProfile(
    name: string,
    email: string
  ): Promise<UpdateProfile | ErrorResponse> {
    return new Promise<UpdateProfile | ErrorResponse>(() =>
      generateUpdateProfileMock()
    );
  }
  /**
   * @inheritDoc
   */
  updateStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<UpdateStation | ErrorResponse> {
    return new Promise<UpdateStation | ErrorResponse>(() =>
      generateUpdateStationMock()
    );
  }
}
