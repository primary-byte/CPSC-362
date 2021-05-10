import { Course } from "./course.interface";

export interface Teacher {
    id: string,
    name: string,
    courses_taught: Course[],
    email: string
};