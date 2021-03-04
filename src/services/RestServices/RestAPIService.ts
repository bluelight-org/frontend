import {RestServiceInterface} from "@/interfaces/RestServiceInterface";

export class RestAPIService implements RestServiceInterface {
    BASE_URL: string = '<url>';

    login(username: string, password: string): boolean {
        return false;
    }

}
