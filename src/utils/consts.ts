import { config } from "dotenv";

config();

export const DEFAULt_PORT = 5000;
export const PORT = process.env.PORT || DEFAULt_PORT;
export const BASE_URL = 'http://localhost:' + PORT;
export const ENDPOINT = '/api/users';
export const ID_REGEXP = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
export const OBJ_KEYS = [ 'username', 'age', 'hobbies' ];

