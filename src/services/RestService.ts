import {RestServiceInterface} from "@/interfaces/RestServiceInterface";
import {MockAPIService} from "@/services/RestServices/MockAPIService";

export class RestService implements RestServiceInterface {

    private service: RestServiceInterface;

    constructor() {
        this.service = new MockAPIService();
    }

    login(username: string, password: string): boolean {
        return this.service.login(username, password);
    }
}
