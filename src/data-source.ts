import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Plants } from "./entities/Plant";

dotenv.config({path: ".env.local"});

const AppDataSource = new DataSource({
    type : "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [Plants],
    subscribers: [],
    migrations: [],
});
export default AppDataSource;
