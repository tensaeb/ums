import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  JoinTable,
} from "typeorm";
import { Course } from "./Course";
import { Grade } from "./Grade";

@Entity({ name: "student" })
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  studentId!: string;

  @Column()
  name!: string;

  @Column()
  contactDetails!: string;

  @ManyToMany((type) => Course, (course) => course.students)
  @JoinTable()
  courses!: Course[];

  @OneToMany((type) => Grade, (grade) => grade.student)
  grades!: Grade[];
}
