import { Country } from "../enum/country"

export interface User {
    username: string,
    password: string,
    email: string,
    age: number
    country: Country
}