import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class CourseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    units: number;
}