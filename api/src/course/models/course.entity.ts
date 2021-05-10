import { TeacherEntity } from "src/teacher/models/teacher.entity";
import { Teacher } from "src/teacher/models/teacher.interface";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class CourseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    units: number;
    
    @Column()
    is100s: boolean;

    @Column()
    is200s: boolean;

    @Column()
    is300s: boolean;

    @Column()
    is400s: boolean;

    @Column()
    is500s: boolean;

    @Column()
    isIntro: boolean;

    @Column()
    isLowerDiv: boolean;

    @Column()
    isUpperDiv: boolean;

    @Column()
    isElective: boolean;

    @Column()
    isMasters: boolean;

}