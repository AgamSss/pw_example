import {cleanEnv, url} from 'envalid';

export const env = cleanEnv(process.env, {
    API_URL: url(),
    API_KEY: url(),
    API_SECRET: url()
}); 