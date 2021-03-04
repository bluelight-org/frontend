import {RestServiceInterface} from "@/interfaces/RestServiceInterface";
import {MockAPIService} from "@/services/RestServices/MockAPIService";

// main API service || decide if you want to use mock or real
export class RestService implements RestServiceInterface {

    // API service
    private service: RestServiceInterface;

    constructor() {
        this.service = new MockAPIService();
    }

    // wrapped login function
    login(username: string, password: string): boolean {
        return this.service.login(username, password);
    }
}
