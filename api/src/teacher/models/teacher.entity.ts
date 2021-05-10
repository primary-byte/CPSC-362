import { CourseEntity } from "src/course/models/course.entity";
import { Course } from "src/course/models/course.interface";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TeacherEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @ManyToMany(() => CourseEntity)
    @JoinTable()
    courses: CourseEntity[];
};