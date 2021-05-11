import { CourseService } from './../../services/course-service/course.service';
import { Course } from './../../model/course.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public searchInput: string;
  public searchChip: boolean;
  courseList: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courseList = courses)
  }

}
