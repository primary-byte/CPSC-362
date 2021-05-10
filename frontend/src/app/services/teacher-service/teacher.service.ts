import { Teacher } from './../../model/teacher.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient,
  ) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>('/api/teachers');
  }
  getTeacherById(id: string): Observable<Teacher> {
    return this.http.get<Teacher>(`/api/teachers/${id}`);
  }

}
