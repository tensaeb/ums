import { Router } from "express";
import { GradeController } from "../controllers/gradeController";

export function gradeRoutes(): Router {
  const router = Router();
  const gradeController = new GradeController();

  router.get("/", gradeController.getAllGrades.bind(gradeController));
  router.get("/:id", gradeController.getGradeById.bind(gradeController));
  router.post("/", gradeController.createGrade.bind(gradeController));
  router.put("/:id", gradeController.updateGrade.bind(gradeController));
  router.delete("/:id", gradeController.deleteGrade.bind(gradeController));

  return router;
}
