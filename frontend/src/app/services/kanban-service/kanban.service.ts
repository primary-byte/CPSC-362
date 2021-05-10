import { User } from './../../model/user.interface';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from './../../model/board.interface';
import { Category } from '../../model/category.interface';
import { Task } from 'src/app/model/task.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  constructor(
    private http: HttpClient,
  ) { }

  getBoardById(id: string): Observable<Board> {
    return this.http.get<Board>(`/api/board/${id}`);
  }

  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/Categorys');
  }

  createCategory(name: string, tasks: string[]): Observable<Category> {
    return this.http.post<Category>(
      '/api/Categorys',
      { name, tasks },
      httpOptions
    );
  }

  editCategory(id: number, category: Category): Observable<any> {
    return this.http.put(`/api/Categorys/${id}`, name);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(`/api/Categorys/${id}`);
  }

  createTask( title: string, description: string): Observable<Task> {
    return this.http.post<Task>(
      '/api/tasks',
      { title, description },
      httpOptions
    );
  }

  editTask(id:number, task: Task): Observable<any> {
    return this.http.put(`/api/tasks/${id}`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`/api/tasks/${id}`);
  }
}
