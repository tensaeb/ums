import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { AppDataSource } from "./db";
import { courseRoutes } from "./routes/courseRoutes";
import { studentRoutes } from "./routes/studentRoutes";
import { gradeRoutes } from "./routes/gradeRoutes";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.connectDatabase();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
  }

  private routes(): void {
    // Import and use your routes here
    const courseRouter = courseRoutes();
    const studentRouter = studentRoutes();
    const gradeRouter = gradeRoutes();
    this.app.use("/api/courses", courseRouter);
    this.app.use("/api/students", studentRouter);
    this.app.use("/api/grades", gradeRouter);
  }

  private connectDatabase(): void {
    AppDataSource.initialize()
      .then(() => {
        console.log("Database has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Database initialization", err);
      });
  }
}

export default new App().app;
