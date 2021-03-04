import {RestServiceInterface} from "@/interfaces/RestServiceInterface";

// wrapper for the API
export class RestAPIService implements RestServiceInterface {
    BASE_URL: string = '<url>';

    // login function
    login(username: string, password: string): boolean {
        return false;
    }

}
