import { Course } from "src/course/models/course.interface";

export interface Teacher {
    id?: number,
    name?: string,
    courses_taught?: Course[],
    email?: string
};