import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Course } from "./Course";
import { Student } from "./Student";

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  letterGrade!: string;

  @ManyToOne((type) => Course, (course) => course.grades)
  course!: Course;

  @ManyToOne((type) => Student, (student) => student.grades)
  student!: Student;

  @Column()
  academicPeriod!: string; // You may need to adjust this based on your requirements
}
