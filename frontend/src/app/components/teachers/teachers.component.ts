import { FilterPipe } from './filter.pipe';
import { TeacherService } from './../../services/teacher-service/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from './../../model/course.interface';
import { Component, OnInit } from '@angular/core';
import { Teacher } from './../../model/teacher.interface';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  course: Course;
  teacherList: Teacher[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.teacherService.getTeachers()
      .subscribe(teachers => this.teacherList = teachers)
  }

}
