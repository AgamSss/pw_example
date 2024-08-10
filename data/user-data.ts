import {UserModel} from '../data/models/user-model';
import {Country} from '../data/enum/country';
import { randomUUID } from 'crypto';
import { faker } from '@faker-js/faker';
import { User } from '../data/interfaces/user.i';
import { Status } from '../data/enum/country';

// export const defaultUser = new UserModel({
//     username: 'defaultUser',
//     password: 'password',
//     email: 'asdfa',
//     age: 23,
//     country: Country.USA
// })

export const createARandomUser = (email?: string, country?: Country) => new UserModel(
    `name+${randomUUID()}`,
    'password',
    email ?? `test+${randomUUID()}@test.com`,
     23,
     country ?? faker.helpers.arrayElement(Object.values(Country)) as Country)

export const create18YearOldUser = (age) => new UserModel(
    faker.random.name(),
    faker.random.password(),
    faker.random.email(),
    age,
    faker.random.arrayValue(Country)
)

export const doctypeWithStatus = (status: Status) => ({
    doctype: faker.random.word(),
    status
})


export const generateRandomUser = (): User => {
    return {
        username: faker.internet.userName({ minLength: 12 }),
        password: faker.internet.password(),
        email: faker.internet.email(),
        age: faker.datatype.number({ min: 18, max: 80 }),
        country:  faker.helpers.arrayElement(Object.values(Country)) as Country
    };
};

export const generateRandomUserData = (numUsers: number = 4): User[] => {
    const users: User[] = [];
    for (let i = 0; i < numUsers; i++) {
        users.push(generateRandomUser());
    }
    return users;
};

export function generateOnlyRequiredUserData(): User {
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
    };
}