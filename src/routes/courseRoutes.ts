import { Router } from "express";
import { CourseController } from "../controllers/courseController";

export function courseRoutes(): Router {
  const router = Router();
  const courseController = new CourseController();

  router.get("/", courseController.getAllCourses.bind(courseController));
  router.get("/:id", courseController.getCourseById.bind(courseController));
  router.post("/", courseController.createCourse.bind(courseController));
  router.put("/:id", courseController.updateCourse.bind(courseController));
  router.delete("/:id", courseController.deleteCourse.bind(courseController));

  return router;
}
