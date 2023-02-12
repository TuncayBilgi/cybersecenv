import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Account } from "./entity/Account"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user",
    password: "mdp",
    database: "namedb",
    synchronize: true,
    logging: true,
    entities: [User,Account],
    subscribers: [],
    migrations: [],
})