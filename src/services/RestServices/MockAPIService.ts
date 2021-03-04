import {RestServiceInterface} from "@/interfaces/RestServiceInterface";

export class MockAPIService implements RestServiceInterface {

    constructor() {}

    login(username: string, password: string): boolean {
        return username == 'root' && password == 'Admin123';
    }

}
