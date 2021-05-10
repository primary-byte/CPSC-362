import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { Teacher } from './models/teacher.interface';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
    constructor(private teacherService: TeacherService){}

    @Get()
    getTeachers(){
        return this.teacherService.getTeachers();
    }

    @Get(':id')
    getDetails(@Param() params): Observable<Teacher>{
        return this.teacherService.getDetails(params.id);
    }

    @Post()
    createTeacher(@Body() teacher: Teacher ): Observable<Teacher | Object> {
        return from(this.teacherService.createTeacher(teacher));
    }
}
