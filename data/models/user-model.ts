import { Country } from "../enum/country";
import { User } from "../interfaces/user.i";

export class UserModel implements User {
    isSubscribed: boolean;
    username: string;
    password: string;
    email: string;
    age: number | string;
    country: Country;
    subscription?: boolean;

    constructor(username: string, password: string, email: string, age: number, country: Country, subscription?: boolean) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;
        this.country = country;
        this.subscription = subscription;
    }
} 

export class UserWithSubscription extends UserModel {
    constructor(username: string, password: string, email: string, age: number, country: Country, isSubscribed: boolean) {
        super(username, password, email, age, country);
        this.isSubscribed = isSubscribed;
    }
}