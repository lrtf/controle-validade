import "reflect-metadata"
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "controle-validade",
  synchronize: false,
  logging: true,
  entities: ["./src/modules/**/infra/models/*{.ts,.js}"],
  subscribers: [],
  migrations: [],
})

export const createConnection = (): Promise<DataSource> => {
  return AppDataSource.initialize();
};

export default AppDataSource