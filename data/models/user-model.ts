import { Country } from "../enum/country";
import { User } from "../interfaces/user.i";

export class UserModel implements User {
    isSubscribed: boolean;
    username: string;
    password: string;
    email: string;
    age: number;
    country: Country;

    constructor(username: string, password: string, email: string, age: number, country: Country) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;
        this.country = country;
    }
} 