// seeder.ts
import { AppDataSource } from "./db";
import { CourseService } from "./services/courseService";
import { StudentService } from "./services/studentService";

export const seedData = async () => {
  await AppDataSource.initialize();
  try {
    console.log("Seeding process started...");
    const courseService = new CourseService();
    const studentService = new StudentService();

    // // Seed fake courses
    // await courseService.seedCourses(20);

    // // Seed fake students
    // await studentService.seedStudents(20);

    console.log("Default data seeding completed.");
  } catch (error) {
    console.error("Error in seedData:", error);
  }
};

export const seedOtherData = async () => {
  // Add logic to seed other data
  console.log("Other data seeding completed.");
};
