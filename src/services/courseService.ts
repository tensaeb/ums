// CourseService.ts
import { Repository } from "typeorm";
import { Course } from "../models/Course";
import { AppDataSource } from "../db";

export class CourseService {
  private courseRepository: Repository<Course>;

  constructor() {
    this.courseRepository = AppDataSource.getRepository(Course);
  }

  async getAllCourses(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  async getCourseById(id: number): Promise<Course | null> {
    const course = await this.courseRepository.findOne({ where: { id } });
    return course || null;
  }

  async createCourse(courseData: Partial<Course>): Promise<Course> {
    const newCourse = this.courseRepository.create(courseData);
    return this.courseRepository.save(newCourse);
  }

  async updateCourse(
    id: number,
    courseData: Partial<Course>
  ): Promise<Course | undefined> {
    const courseToUpdate = await this.courseRepository.findOne({
      where: { id },
    });

    if (!courseToUpdate) {
      return undefined;
    }

    this.courseRepository.merge(courseToUpdate, courseData);
    return this.courseRepository.save(courseToUpdate);
  }

  async deleteCourse(id: number): Promise<boolean> {
    const result = await this.courseRepository.delete(id);
    return result.affected !== 0;
  }
}
