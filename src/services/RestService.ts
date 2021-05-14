import { RestServiceInterface } from "typings/RestServiceInterface";
import { MockAPIService } from "@/services/RestServices/MockAPIService";
import { RestAPIService } from "@/services/RestServices/RestAPIService";
import { CreateMission } from "../../typings/api/responses/createMission";
import { ErrorResponse } from "../../typings/api/responses/ErrorResponse";
import { CreateProfile } from "../../typings/api/responses/createProfile";
import { CreateStation } from "../../typings/api/responses/createStation";
import { CreateVehicle } from "../../typings/api/responses/createVehicle";
import { GetAllMissionsResponse } from "../../typings/api/responses/getAllMissions";
import { GetAllStations } from "../../typings/api/responses/getAllStations";
import { GetAllVehicles } from "../../typings/api/responses/getAllVehicles";
import { GetMission } from "../../typings/api/responses/getMission";
import { GetStation } from "../../typings/api/responses/getStation";
import { UpdateMission } from "../../typings/api/responses/updateMission";
import { UpdateProfile } from "../../typings/api/responses/updateProfile";
import { UpdateStation } from "../../typings/api/responses/updateStation";

// main API service || decide if you want to use mock or real
export class RestService implements RestServiceInterface {
  // API service
  private service: RestServiceInterface;

  constructor() {
    this.service =
      process.env.NODE_ENV === "development"
        ? new MockAPIService()
        : new RestAPIService();
  }

  // The register function calls the `/register`
  // endpoint and returns the status as boolean.
  // If an error occurs it returns the error
  // message as string
  async register(
    username: string,
    password: string,
    retypePassword: string
  ): Promise<[boolean, string]> {
    return await this.service.register(username, password, retypePassword);
  }

  // The login function calls the `/login` endpoint to
  // login the user and save the session information
  // to the local storage.
  async login(username: string, password: string): Promise<boolean> {
    return await this.service.login(username, password);
  }
  // The create mission function calls the /missions endpoint
  // with POST method. It creates a new mission on the server
  // which is being showed in the monitor
  async createMission(
    address: string,
    latitude: number,
    longitude: number,
    keyword: string,
    details: string,
    vehicles: number[]
  ): Promise<CreateMission | ErrorResponse> {
    return await this.service.createMission(
      address,
      latitude,
      longitude,
      keyword,
      details,
      vehicles
    );
  }
  // The create profile function calls the /profile endpoint
  // with POST method. It creates a new profile on the server
  // which can be used to interact with the service
  async createProfile(
    name: string,
    email: string,
    password: string
  ): Promise<CreateProfile | ErrorResponse> {
    return await this.service.createProfile(name, email, password);
  }
  // The create station function calls the /stations endpoint
  // with POST method. It creates a new station on the server
  // which helps to organize vehicles
  async createStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<CreateStation | ErrorResponse> {
    return await this.service.createStation(name, latitude, longitude);
  }
  // The create profile function calls the /station/{id}/vehicles endpoint
  // with POST method. It creates a new vehicle for the specific
  // station and saves it.
  async createVehicle(
    station_id: number,
    name: string,
    type: string
  ): Promise<CreateVehicle | ErrorResponse> {
    return await this.service.createVehicle(station_id, name, type);
  }
  // The delete all missions function calls the /missions endpoint
  // with DELETE method. It deletes all active missions for all stations
  // and removes them from the monitor
  async deleteAllMissions(): Promise<boolean> {
    return await this.service.deleteAllMissions();
  }
  // The delete all stations function calls the /stations endpoint
  // with DELETE method. It deletes all stations
  // and removes them from the monitor
  async deleteAllStations(): Promise<null> {
    return await this.service.deleteAllStations();
  }
  // The delete all vehicles function calls the /stations/{id}/vehicles endpoint
  // with DELETE method. It deletes all active vehicles in a station
  // and removes them from the monitor
  async deleteAllVehicles(station_id: number): Promise<ErrorResponse | null> {
    return await this.service.deleteAllVehicles(station_id);
  }
  // The delete mission function calls the /missions/{id} endpoint
  // with DELETE method. It deletes the given mission
  // and removes it from the monitor by sending the data to the server
  async deleteMission(id: number): Promise<ErrorResponse | null> {
    return await this.service.deleteMission(id);
  }
  // The delete profile function calls the /profile endpoint
  // with DELETE method. It deletes all the given profile and
  // all its referencing data
  async deleteProfile(): Promise<null> {
    return await this.service.deleteProfile();
  }
  // The delete station function calls the /stations/{id} endpoint
  // with DELETE method. It deletes the given station
  // and removes it from the monitor by sending the data to the server.
  // It also deletes all the referencing data like vehicles of the station
  async deleteStation(id: number): Promise<ErrorResponse | null> {
    return await this.service.deleteStation(id);
  }
  // The get all missions function calls the /missions endpoint with
  // GET method. It returns all active missions for the logged in
  // profile
  async getAllMissions(): Promise<GetAllMissionsResponse> {
    return await this.service.getAllMissions();
  }
  // The get all stations function calls the /stations endpoint with
  // GET method. It returns all stations for the logged in
  // profile
  async getAllStations(): Promise<GetAllStations> {
    return await this.service.getAllStations();
  }
  // The get all missions function calls the /stations/{id}/vehicles endpoint with
  // GET method. It returns all vehicles for the given station
  async getAllVehicles(
    station_id: number
  ): Promise<GetAllVehicles | ErrorResponse> {
    return await this.service.getAllVehicles(station_id);
  }
  // The get mission function calls the /missions/{id} endpoint with
  // GET method. It returns the mission for the given id
  async getMission(id: number): Promise<GetMission | ErrorResponse> {
    return await this.service.getMission(id);
  }
  // The get station function calls the /stations/{id} endpoint with
  // GET method. It returns the mission for the given id
  async getStation(id: number): Promise<GetStation | ErrorResponse> {
    return await this.service.getStation(id);
  }
  // The update mission function calls the /missions endpoint
  // with the PUT method. It updates all missions that are matching
  // the given values
  async updateMission(
    address: string,
    latitude: number,
    longitude: number,
    keyword: string,
    details: string,
    vehicles: number[],
    alerted: boolean
  ): Promise<UpdateMission | ErrorResponse> {
    return await this.service.updateMission(
      address,
      latitude,
      longitude,
      keyword,
      details,
      vehicles,
      alerted
    );
  }
  // The update profile function calls the /profile endpoint
  // with the PUT method. It updates all profiles that are matching
  // the given values
  async updateProfile(
    name: string,
    email: string
  ): Promise<UpdateProfile | ErrorResponse> {
    return await this.service.updateProfile(name, email);
  }
  // The update station function calls the /stations endpoint
  // with the PUT method. It updates all stations that are matching
  // the given values
  async updateStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<UpdateStation | ErrorResponse> {
    return await this.service.updateStation(name, latitude, longitude);
  }
}
