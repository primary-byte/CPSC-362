

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../../model/course.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient,
  ) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses');
  }

  getCourseById(id: string): Observable<Course> {
    return this.http.get<Course>(`/api/courses/${id}`);
  }

}
