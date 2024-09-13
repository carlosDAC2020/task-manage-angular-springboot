import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class ApiTasksService {
  private apiUrl = 'http://localhost:8080/task';  // URL base de la API

  constructor(private http: HttpClient) { }

  // Obtener todas las tareas
  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/get-all-task`);
  }

  // Obtener una tarea por ID
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/get-task/${id}`);
  }

  // Crear una nueva tarea
  createTask(task: Task): Observable<Task> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Task>(`${this.apiUrl}/new-task`, task, { headers });
  }

  // Actualizar una tarea
  updateTask(task: Task): Observable<Task> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Task>(`${this.apiUrl}/update-task/${task.id}`, {
      'title':task.title,
      'description':task.description,
      "priority":task.priority
    }, { headers });
  }

  // Cambiar el estado de una tarea a completado
  changeTaskStatus(id: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/change-status/${id}`, null);
  }

  // Eliminar una tarea
  deleteTask(id: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-task/${id}`);
  }
}
