// add controllers 
import { AuthController } from "./auth.controller";
import { RequestHolder } from "./requestHolder";

export class API extends RequestHolder {
    // add controllers
    public readonly auth = new AuthController(this.request)
}