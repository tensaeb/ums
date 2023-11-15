import { Request, Response } from "express";
import { StudentService } from "../services/studentService";

export class StudentController {
  private studentService: StudentService;

  constructor() {
    this.studentService = new StudentService();
  }

  async getAllStudents(req: Request, res: Response) {
    const students = await this.studentService.getAllStudents();
    res.json(students);
  }

  async createStudent(req: Request, res: Response) {
    const newStudent = await this.studentService.createStudent(req.body);
    res.json(newStudent);
  }
}
