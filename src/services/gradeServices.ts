import { Repository } from "typeorm";
import { faker } from "@faker-js/faker";
import { Grade } from "../models/Grade";
import { AppDataSource } from "../db";

export class GradeServices {
  private gradeReposiory: Repository<Grade>;

  constructor() {
    this.gradeReposiory = AppDataSource.getRepository(Grade);
  }

  async getAllGrades(): Promise<Grade[]> {
    return this.gradeReposiory.find();
  }
  async getGradeById(id: number): Promise<Grade | null> {
    const course = await this.gradeReposiory.findOne({ where: { id } });
    return course || null;
  }
  async createGrade(gradeData: Partial<Grade>): Promise<Grade> {
    const newGrade = this.gradeReposiory.create(gradeData);
    return this.gradeReposiory.save(newGrade);
  }

  async updateGrade(
    id: number,
    gradeData: Partial<Grade>
  ): Promise<Grade | undefined> {
    const gradeToUpdate = await this.gradeReposiory.findOne({
      where: { id },
    });

    if (!gradeToUpdate) {
      return undefined;
    }

    this.gradeReposiory.merge(gradeToUpdate, gradeData);
    return this.gradeReposiory.save(gradeToUpdate);
  }
  async deleteGrade(id: number): Promise<boolean> {
    const result = await this.gradeReposiory.delete(id);
    return result.affected !== 0;
  }
}
