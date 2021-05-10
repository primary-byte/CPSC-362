import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { TeacherEntity } from './models/teacher.entity';
import { Teacher } from './models/teacher.interface';

@Injectable()
export class TeacherService {
    constructor (
        @InjectRepository(TeacherEntity) private readonly teacherRepository: Repository<TeacherEntity>
    ){}

    getTeachers(): Observable<Teacher[]>  {
        return from(this.teacherRepository.find());
    }

    getDetails(id: number): Observable<Teacher> {
        return from(this.teacherRepository.findOne(id));
    }

    createTeacher(teacher: Teacher){
        return this.teacherRepository.save(teacher);
    }
}
