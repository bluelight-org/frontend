/* eslint-disable */
import { AccessToken } from "../../../typings/api/models/accessToken";
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

const PREFIX = process.env.NODE_ENV === "development" ? "http://127.0.0.1:8080/api": "/api";

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


  // ----------------------------------------------------
  // Downside are all functions needed for the
  // refresh token implementation of the bluelight frontend
  // for the communication with the bluelight backend
  // ----------------------------------------------------

    private static accessToken: AccessToken;

    // This function fetches a new accessToken from the 
    // backend, if the old expired
    private static getAccessToken(): Promise<AccessToken> {
        // TODO: rework this.
        // Also: Why do we use the username as the refresh token?
        // Another point: You use a function req to fetch it, but req requires the token anyway or tries to get it.
        return this.get<AccessToken>("/auth/accesstoken?username=" + localStorage.getItem("username"));
    }

    private static get<T>(path: string, emitError: boolean = true, blob: boolean = false): Promise<T> {
        return this.req<T>("GET", path, undefined, undefined, emitError, 0, blob);
    }

    private static post<T>(
        path: string,
        body?: any,
        emitError: boolean = true,
        contentType: string | undefined = "application/json"
    ): Promise<T> {
        return this.req<T>("POST", path, body, contentType, emitError);
    }


    private static async req<T>(
        method: string,
        path: string,
        body?: any,
        contentType: string | undefined = "application/json",
        emitError: boolean = true,
        counter: number = 0,
        blob: boolean = false
    ): Promise<T> {

        if (this.accessToken && new Date(+this.accessToken.deadline * 1000) < new Date()) {
            try {
                if (counter > 3) {
                    return "expired" as any;
                }
                this.accessToken = await this.getAccessToken();
                let newCounter = counter + 1;
                return this.req(method, path, body, contentType, emitError, newCounter, blob);
            } catch (e) {
                throw e;
            }
        }

        let reqBody = undefined;
        if (body) {
            if (typeof body !== "string" && contentType === "application/json") {
                reqBody = JSON.stringify(body);
            } else {
                reqBody = body;
            }
        }

        const headers: { [key: string]: string } = {};
        if (contentType !== "multipart/form-data") {
            headers["content-type"] = contentType;
        }

        if (this.accessToken) {
            headers["authorization"] = "accessToken " + this.accessToken.token;
        }

        const res = await window.fetch(`${PREFIX}${path}`, {
            method,
            headers,
            body: reqBody,
            credentials: "include",
            mode: process.env.NODE_ENV === "development" ? "cors" : "same-origin"
        });

        if (res.status === 401) {
            try {
                if (!blob) {
                    const resBody = (await res.json()) as ErrorResponse;
                    if (resBody.error.message[0] === "invalid access token") {
                        this.accessToken = await this.getAccessToken();
                        if (counter < 3) {
                            return this.req(method, path, body, contentType, emitError, counter + 1, blob);
                        } else {
                            return resBody as any;
                        }
                    }
                } else {
                    this.accessToken = await this.getAccessToken();
                    if (counter < 3) {
                        return this.req(method, path, body, contentType, emitError, counter + 1, blob);
                    } else {
                        return null as any;
                    }
                }
            } catch {}
        }

        if (res.status === 204 || res.headers.get("content-length") === "0") {
            return {} as T;
        }
        if (blob) {
            return await res.blob() as any;
        } else {
            return res.json();
        }
    }
}
