import { Request, Response } from "express";
import { GradeServices } from "../services/gradeServices";

export class GradeController {
  private gradeServices: GradeServices;

  constructor() {
    this.gradeServices = new GradeServices();
  }

  async getAllGrades(req: Request, res: Response) {
    const grades = await this.gradeServices.getAllGrades();
    res.json(grades);
  }

  async getGradeById(req: Request, res: Response) {
    const { id } = req.params;
    const gradeId = parseInt(id, 10);

    const grade = await this.gradeServices.getGradeById(gradeId);

    if (!grade) {
      res.status(404).json({ message: "Grade not found" });
    } else {
      res.json(grade);
    }
  }

  async createGrade(req: Request, res: Response) {
    const newGrade = await this.gradeServices.createGrade(req.body);
    res.json(newGrade);
  }

  async updateGrade(req: Request, res: Response) {
    const { id } = req.params;
    const gradeId = parseInt(id, 10);

    const updatedGrade = await this.gradeServices.updateGrade(
      gradeId,
      req.body
    );

    if (!updatedGrade) {
      res.status(404).json({ message: "Grade not found" });
    } else {
      res.json(updatedGrade);
    }
  }
  async deleteGrade(req: Request, res: Response) {
    const { id } = req.params;
    const gradeId = parseInt(id, 10);

    const result = await this.gradeServices.deleteGrade(gradeId);

    if (!result) {
      res.status(404).json({ message: "Grade not found" });
    } else {
      res.json({ message: "Grade deleted successfully" });
    }
  }
}
