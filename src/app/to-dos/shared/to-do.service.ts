import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Page } from '../../shared/page';
import { ToDo } from './to-do.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private serviceUrl = '/api/v1/todos';

  constructor(private http: HttpClient) { }

  getAll(page: number): Observable<Page<ToDo>> {
    const url = `${this.serviceUrl}?page=${page}`;
    return this.http.get<Page<ToDo>>(url);
  }

  get(id: string): Observable<ToDo> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get<ToDo>(url);
  }

  add(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.serviceUrl, todo, httpOptions);
  }

  update(todo: ToDo): Observable<ToDo> {
    const url = `${this.serviceUrl}/${todo.id}`;
    return this.http.put<ToDo>(url, todo, httpOptions);
  }

  delete(todo: ToDo) {
    const url = `${this.serviceUrl}/${todo.id}`;
    return this.http.delete(url);
  }

}
