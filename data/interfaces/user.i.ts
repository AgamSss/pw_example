import { Country } from "../enum/country"
export interface User {
    username: string,
    password: string,
    email: string,
    age: number | string,
    country: Country
}

export interface LoginUser {
    email: string,
    password: string,
    rememberMe?: boolean
}

export interface SignUpUser extends User {
    lastName: string,
    firstName: string,
}

// 1. Має інтерфейс котрий описує сутніть
// 2. У нас є РОМ та Тести де ми маємо використати ці данні 
// (але у РОМ ми не використовуємо згенеровані дані, а описуємо логіку роботи х данними)
// 3. нам потрібно згенерувати дані для тестів (використовуємо фейкер)
// 4. Для того щоб уникнути дублювання згенерованих даних ми винесли генерацію в окремий файл
// 5. Ми маємо задовільнити інтерфейс з данними які ми генеруємо
// 6. Ми маємо використати ці дані в тестах (викликати функцію генерації даних)
// 7. Підставляємо ці дані в тести 