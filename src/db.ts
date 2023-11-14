import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

//Models
import { Course } from "./models/Course";
import { Student } from "./models/Student";
import { Grade } from "./models/Grade";

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_SERVER,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Course, Student, Grade],
});

export { AppDataSource };
