import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entities/user"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: `${__dirname}/data/database.sqlite`,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
