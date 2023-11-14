import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from "typeorm";
import { Student } from "./Student";
import { Grade } from "./Grade";

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  courseCode!: string;

  @Column()
  description!: string;

  @Column()
  creditHours!: number;

  @ManyToMany((type) => Student, (student) => student.courses)
  @JoinTable()
  students!: Student[];

  @OneToMany((type) => Grade, (grade) => grade.course)
  grades!: Grade[];
}
