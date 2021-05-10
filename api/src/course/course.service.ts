import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CourseEntity } from './models/course.entity';
import { Course } from './models/course.interface';

@Injectable()
export class CourseService {
    constructor (
        @InjectRepository(CourseEntity) private readonly courseRepository: Repository<CourseEntity>
    ){}

    getCourses(): Observable<Course[]> {
        return from(this.courseRepository.find());
    }

    getDetails(id : number): Observable<Course> {

        return from(this.courseRepository.findOne(id));
    }
    createCourse(course: Course) {
        return this.courseRepository.save(course);
    }
}
