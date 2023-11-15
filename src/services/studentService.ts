import { Student } from "../models/Student";
import { Repository } from "typeorm";
import { faker } from "@faker-js/faker";
import { AppDataSource } from "../db";

export class StudentService {
  private studentRepository: Repository<Student>;

  constructor() {
    this.studentRepository = AppDataSource.getRepository(Student);
  }

  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async createStudent(stdentData: Partial<Student>) {
    const newStudent = this.studentRepository.create(stdentData);
    return this.studentRepository.save(newStudent);
  }
  async seedStudents(numOfStudents: number): Promise<Student[]> {
    const students: Student[] = [];

    for (let i = 0; i < numOfStudents; i++) {
      const fakeStudent: Partial<Student> = {
        studentId: faker.string.sample(5),
        name: faker.person.fullName(),
        contactDetails: faker.internet.email(),
        // Add other properties and relationships as needed
      };
      const newStudent = this.studentRepository.create(fakeStudent);
      students.push(await this.studentRepository.save(newStudent));
    }
    return students;
  }
}
