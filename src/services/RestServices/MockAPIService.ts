import {RestServiceInterface} from "@/interfaces/RestServiceInterface";

// mock service || simulates API responses
export class MockAPIService implements RestServiceInterface {

    constructor() {}

    // login function
    login(username: string, password: string): boolean {
        return username == 'root' && password == 'Admin123';
    }

}
