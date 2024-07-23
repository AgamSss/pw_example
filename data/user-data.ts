import {UserModel} from '../data/models/user-model';
import {Country} from '../data/enum/country';
import { randomUUID } from 'crypto';

// export const defaultUser = new UserModel({
//     username: 'defaultUser',
//     password: 'password',
//     email: 'asdfa',
//     age: 23,
//     country: Country.USA
// })

export const createARandomUser = () => new UserModel(
    `name+${randomUUID()}`,
    'password',
    `test+${randomUUID()}@test.com`,
     23,
    Country.USA)

export const create18YearOldUser = () => new UserModel(
    faker.random.name(),
    faker.random.password(),
    faker.random.email(),
    18,
    faker.random.arrayValue(Country)
)

export const doctypeWithStatus = (status: Status) => ({
    doctype: faker.random.word(),
    status
})
