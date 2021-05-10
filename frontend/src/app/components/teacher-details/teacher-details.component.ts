import { ActivatedRoute } from '@angular/router';
import { TeacherService } from './../../services/teacher-service/teacher.service';
import { Teacher } from './../../model/teacher.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss']
})
export class TeacherDetailsComponent implements OnInit {

  teacher: Teacher;
  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.teacherService.getTeacherById(id)
      .subscribe(teacher => {
        this.teacher = teacher;
      });
  }

}
