import type { UserCreatedResponse } from "../api/model";
import { faker } from "@faker-js/faker";

interface Name{
    name: string;
}

interface Adress {
    adress: string;
}

interface PersonI extends Name, Adress {}

type Person = Name & Adress;
type Callback = (data: string) => void;
type Point = { x: number, y: number };
type ID = string | number;
type Points = [number, number];

const person: Person = {
    name: "John",
    adress: "123 Main St."
};

interface Lengthwise {
    length: number;
}

function logWithLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

logWithLength({ length: 10, value: "Hello" });
logWithLength("Hello");
logWithLength([1, 2, 3, 4, 5]);


class Box<T extends string | LoginResponse> {
    contents: T;
    constructor(contents: T) {
        this.contents = contents;
    }

    getContents(): T {
        return this.contents;
    }
}

interface LoginResponse {
    success: boolean;
    token: string;
    user: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        cars: string[];
    }
}

const loginResponse: LoginResponse = {
    success: true,
    token: "123",
    user: {
        id: "123",
        email: "",
        firstName: "",
        lastName: "",
        cars: []
}}


const stringBox = new Box<string>("Hello Generic");
const booleanBox = new Box<LoginResponse>(loginResponse);


class LoginData implements LoginResponse {
    success: boolean;
    token: string;
    user: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        cars: string[];
    }
    status?: string;
    
        constructor(success: boolean, token: string, user: { id: string; email: string; firstName: string; lastName: string; cars: string[]; }, status?: string) {
            this.success = success;
            this.token = token;
            this.user = user;
            this.status = status;
        }
    
}

//const loginData = new LoginData(true, "123", { id: "123", email: "", firstName: "", lastName: "", cars: [] });

export function generateRandomLoginData(): LoginData {
    return new LoginData(
        faker.datatype.boolean(), 
        faker.datatype.uuid(), 
        { id: faker.datatype.uuid(), 
            email: faker.internet.email(), 
            firstName: faker.person.firstName(), 
            lastName: faker.person.lastName(), 
            cars: [] 
        }
    );
}


const user1 = generateRandomLoginData();