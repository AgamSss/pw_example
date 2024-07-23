export interface Car {
    id: string;
    make: string;
    model: string;
    year: number|Date;
    color: string|null;
    price: number|undefined;
}


export interface LoginResponse {
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

export interface UserCreatedResponse {
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