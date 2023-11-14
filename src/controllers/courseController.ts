// CourseController.ts
import { Request, Response } from "express";
import { CourseService } from "../services/courseService";

export class CourseController {
  private courseService: CourseService;

  constructor() {
    this.courseService = new CourseService();
  }

  async getAllCourses(req: Request, res: Response) {
    const courses = await this.courseService.getAllCourses();
    res.json(courses);
  }

  async getCourseById(req: Request, res: Response) {
    const { id } = req.params;
    const courseId = parseInt(id, 10);

    const course = await this.courseService.getCourseById(courseId);

    if (!course) {
      res.status(404).json({ message: "Course not found" });
    } else {
      res.json(course);
    }
  }

  async createCourse(req: Request, res: Response) {
    const newCourse = await this.courseService.createCourse(req.body);
    res.json(newCourse);
  }

  async updateCourse(req: Request, res: Response) {
    const { id } = req.params;
    const courseId = parseInt(id, 10);

    const updatedCourse = await this.courseService.updateCourse(
      courseId,
      req.body
    );

    if (!updatedCourse) {
      res.status(404).json({ message: "Course not found" });
    } else {
      res.json(updatedCourse);
    }
  }

  async deleteCourse(req: Request, res: Response) {
    const { id } = req.params;
    const courseId = parseInt(id, 10);

    const result = await this.courseService.deleteCourse(courseId);

    if (!result) {
      res.status(404).json({ message: "Course not found" });
    } else {
      res.json({ message: "Course deleted successfully" });
    }
  }
}
