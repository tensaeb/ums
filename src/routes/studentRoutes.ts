import { Router } from "express";
import { StudentController } from "../controllers/studentController";

export function studentRoutes(): Router {
  const router = Router();
  const studentController = new StudentController();

  router.get("/", studentController.getAllStudents.bind(studentController));
  router.post("/", studentController.createStudent.bind(studentController));

  return router;
}
