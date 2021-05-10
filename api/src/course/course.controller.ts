import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CourseService } from './course.service';
import { Course } from './models/course.interface';

@Controller('courses')
export class CourseController {
    constructor(private courseService: CourseService){}

    @Get()
    getCourses(){
        return this.courseService.getCourses();
    }

    @Get(':id')
    getDetails(@Param() params): Observable<Course>{
        return this.courseService.getDetails(params.id);
    }

    @Post()
    createCourse(@Body() course: Course ): Observable<Course | Object>{
        return from(this.courseService.createCourse(course));
    }
}
