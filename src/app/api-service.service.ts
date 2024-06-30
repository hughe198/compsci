import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'http://127.0.0.1:8000';
  constructor(private http:HttpClient) { }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/projects`);
  }

  getProject(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/projects/${id}`);
  }

  addProject(project: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/projects`, project);
  }

  addPageToProject(projectId: number, page: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/projects/${projectId}/pages`, page);
  }


}
