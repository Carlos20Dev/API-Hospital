import { config } from "dotenv";
config();

export default {
    PORT: process.env.PORT || 3000,
    USER: process.env.DB_USER || '',
    PASS: process.env.DB_PASSWORD || '',
    SERVER: process.env.DB_SERVER || '',
    DATABASE: process.env.DB_DATABASE || '',
}