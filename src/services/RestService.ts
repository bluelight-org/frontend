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

/**
 * The rest service that handles rest web requests
 */
export class RestService implements RestServiceInterface {
  private service: RestServiceInterface;

  constructor() {
    this.service =
      process.env.REST_SERVICE === "mock"
        ? new MockAPIService()
        : new RestAPIService();
  }
  /**
   * @inheritDoc
   */
  async register(
    username: string,
    password: string,
    retypePassword: string
  ): Promise<[boolean, string]> {
    return await this.service.register(username, password, retypePassword);
  }
  /**
   * @inheritDoc
   */
  async login(username: string, password: string): Promise<boolean> {
    return await this.service.login(username, password);
  }
  /**
   * @inheritDoc
   */
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
  /**
   * @inheritDoc
   */
  async createProfile(
    name: string,
    email: string,
    password: string
  ): Promise<CreateProfile | ErrorResponse> {
    return await this.service.createProfile(name, email, password);
  }
  /**
   * @inheritDoc
   */
  async createStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<CreateStation | ErrorResponse> {
    return await this.service.createStation(name, latitude, longitude);
  }
  /**
   * @inheritDoc
   */
  async createVehicleOnStation(
    station_id: number,
    name: string,
    type: string
  ): Promise<CreateVehicle | ErrorResponse> {
    return await this.service.createVehicleOnStation(station_id, name, type);
  }
  /**
   * @inheritDoc
   */
  async deleteAllMissions(): Promise<boolean> {
    return await this.service.deleteAllMissions();
  }
  /**
   * @inheritDoc
   */
  async deleteAllStations(): Promise<null> {
    return await this.service.deleteAllStations();
  }
  /**
   * @inheritDoc
   */
  async deleteAllVehiclesOfStation(
    station_id: number
  ): Promise<ErrorResponse | null> {
    return await this.service.deleteAllVehiclesOfStation(station_id);
  }
  /**
   * @inheritDoc
   */
  async deleteMission(id: number): Promise<ErrorResponse | null> {
    return await this.service.deleteMission(id);
  }
  /**
   * @inheritDoc
   */
  async deleteProfile(): Promise<null> {
    return await this.service.deleteProfile();
  }
  /**
   * @inheritDoc
   */
  async deleteStation(id: number): Promise<ErrorResponse | null> {
    return await this.service.deleteStation(id);
  }
  /**
   * @inheritDoc
   */
  async getAllMissions(): Promise<GetAllMissionsResponse> {
    return await this.service.getAllMissions();
  }
  /**
   * @inheritDoc
   */
  async getAllStations(): Promise<GetAllStations> {
    return await this.service.getAllStations();
  }
  /**
   * @inheritDoc
   */
  async getAllVehiclesOfStation(
    station_id: number
  ): Promise<GetAllVehicles | ErrorResponse> {
    return await this.service.getAllVehiclesOfStation(station_id);
  }
  /**
   * @inheritDoc
   */
  async getMission(id: number): Promise<GetMission | ErrorResponse> {
    return await this.service.getMission(id);
  }
  /**
   * @inheritDoc
   */
  async getStation(id: number): Promise<GetStation | ErrorResponse> {
    return await this.service.getStation(id);
  }
  /**
   * @inheritDoc
   */
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
  /**
   * @inheritDoc
   */
  async updateProfile(
    name: string,
    email: string
  ): Promise<UpdateProfile | ErrorResponse> {
    return await this.service.updateProfile(name, email);
  }
  /**
   * @inheritDoc
   */
  async updateStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<UpdateStation | ErrorResponse> {
    return await this.service.updateStation(name, latitude, longitude);
  }
}
