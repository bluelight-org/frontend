/* eslint-disable */
import { RestServiceInterface } from "../../../typings/RestServiceInterface";
import { ErrorResponse } from "../../../typings/api/responses/ErrorResponse";
import {
  CreateMission,
  generateCreateMissionMock
} from "../../../typings/api/responses/createMission";
import {
  CreateProfile,
  generateCreateProfileMock
} from "../../../typings/api/responses/createProfile";
import {
  CreateStation,
  generateCreateStationMock
} from "../../../typings/api/responses/createStation";
import {
  CreateVehicle,
  generateCreateVehicleMock
} from "../../../typings/api/responses/createVehicle";
import {
  generateGetAllMissionsResponseMock,
  GetAllMissionsResponse
} from "../../../typings/api/responses/getAllMissions";
import { generateGetAllStationsMock, GetAllStations } from "../../../typings/api/responses/getAllStations";
import { generateGetAllVehiclesMock, GetAllVehicles } from "../../../typings/api/responses/getAllVehicles";
import { generateGetMissionMock, GetMission } from "../../../typings/api/responses/getMission";
import { generateGetStationMock, GetStation } from "../../../typings/api/responses/getStation";
import { generateUpdateMissionMock, UpdateMission } from "../../../typings/api/responses/updateMission";
import { generateUpdateProfileMock, UpdateProfile } from "../../../typings/api/responses/updateProfile";
import { generateUpdateStationMock, UpdateStation } from "../../../typings/api/responses/updateStation";

// mock service || simulates API responses
export class MockAPIService implements RestServiceInterface {
  // The login mock endpoint
  // returns a promise of True,
  // if username and password are matching
  async login(username: string, password: string): Promise<boolean> {
    return username == "root" && password == "Admin123";
  }

  // The register service returns
  // a static promise of [boolean, string]
  // without validating any data
  async register(
    username: string,
    password: string,
    retypePassword: string
  ): Promise<[boolean, string]> {
    return [password === retypePassword, username];
  }

  // The create mission endpoint
  // returns a static promise of
  // the CreateMission type. It returns
  // the generated example mock
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
  // The create profile endpoint
  // returns a static promise of
  // the CreateProfile type. It returns
  // the generated example mock
  createProfile(
    name: string,
    email: string,
    password: string
  ): Promise<CreateProfile | ErrorResponse> {
    return new Promise<CreateProfile | ErrorResponse>(() =>
      generateCreateProfileMock()
    );
  }
  // The create station endpoint
  // returns a static promise of
  // the CreateStation type. It returns
  // the generated example mock
  createStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<CreateStation | ErrorResponse> {
    return new Promise<CreateStation | ErrorResponse>(() =>
      generateCreateStationMock()
    );
  }
  // The create vehicle endpoint
  // returns a static promise of
  // the CreateVehicle type. It returns
  // the generated example mock
  createVehicle(
    station_id: number,
    name: string,
    type: string
  ): Promise<CreateVehicle | ErrorResponse> {
    return new Promise<CreateVehicle | ErrorResponse>(() =>
      generateCreateVehicleMock()
    );
  }
  // The delete all missions endpoint
  // returns a static promise of
  // the boolean type.
  deleteAllMissions(): Promise<boolean> {
    return Promise.resolve(false);
  }
  // The delete all stations endpoint
  // returns a static promise of
  // the null type.
  deleteAllStations(): Promise<null> {
    return Promise.resolve(null);
  }
  // The delete all vehicles endpoint
  // returns a static promise of
  // the null type.
  deleteAllVehicles(station_id: number): Promise<ErrorResponse | null> {
    return Promise.resolve(null);
  }
  // The delete mission endpoint
  // returns a static promise of
  // the null type.
  deleteMission(id: number): Promise<ErrorResponse | null> {
    return Promise.resolve(null);
  }
  // The delete profile endpoint
  // returns a static promise of
  // the null type.
  deleteProfile(): Promise<null> {
    return Promise.resolve(null);
  }
  // The delete station endpoint
  // returns a static promise of
  // the null type.
  deleteStation(id: number): Promise<ErrorResponse | null> {
    return Promise.resolve(null);
  }
  // The get all missions endpoint
  // returns a static promise of
  // the GetAllMissionsResponse type.
  // It returns the generated example mock
  getAllMissions(): Promise<GetAllMissionsResponse> {
    return new Promise<GetAllMissionsResponse>(() =>
      generateGetAllMissionsResponseMock()
    );
  }
  // The get all stations endpoint
  // returns a static promise of
  // the GetAllStations type.
  // It returns the generated example mock
  getAllStations(): Promise<GetAllStations> {
    return new Promise<GetAllStations>(() => generateGetAllStationsMock());
  }
  // The get all vehicles endpoint
  // returns a static promise of
  // the GetAllVehicles type.
  // It returns the generated example mock
  getAllVehicles(station_id: number): Promise<GetAllVehicles | ErrorResponse> {
    return new Promise<GetAllVehicles | ErrorResponse>(() =>
      generateGetAllVehiclesMock()
    );
  }
  // The get mission endpoint
  // returns a static promise of
  // the GetMission type.
  // It returns the generated example mock
  getMission(id: number): Promise<GetMission | ErrorResponse> {
    return new Promise<GetMission | ErrorResponse>(() =>
      generateGetMissionMock()
    );
  }
  // The get station endpoint
  // returns a static promise of
  // the GetStation type.
  // It returns the generated example mock
  getStation(id: number): Promise<GetStation | ErrorResponse> {
    return new Promise<GetStation | ErrorResponse>(() =>
      generateGetStationMock()
    );
  }
  // The update mission endpoint
  // returns a static promise of
  // the UpdateMission type.
  // It returns the generated example mock
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
  // The update profile endpoint
  // returns a static promise of
  // the UpdateProfile type.
  // It returns the generated example mock
  updateProfile(
    name: string,
    email: string
  ): Promise<UpdateProfile | ErrorResponse> {
    return new Promise<UpdateProfile | ErrorResponse>(() =>
      generateUpdateProfileMock()
    );
  }
  // The update station endpoint
  // returns a static promise of
  // the UpdateStation type.
  // It returns the generated example mock
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
