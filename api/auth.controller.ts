import { RequestHolder } from "./requestHolder";
import { env } from "../env";
import type { LoginResponse,
    UserCreatedResponse
 } from "./model";
import { UserModel } from "../data/models/user-model";
//add types 
//add envs

export class AuthController extends RequestHolder {
    async login(data: {email: string, password: string}): Promise<LoginResponse>{
        const loginResponse = await this.request.post(`${env.API_URL}`, {data})
        return loginResponse.json() as Promise<LoginResponse>
    }

    async register(user: UserModel): Promise<UserCreatedResponse>{
        const userCreated = await this.request.post(`${env.API_URL}`, {data: user})
        return userCreated.json() as Promise<UserCreatedResponse>
    }
}