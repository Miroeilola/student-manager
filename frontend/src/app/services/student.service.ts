import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student> {
    const endpoint = environment.apiUrl + '/students';
    return this.http.get<Student>('http://localhost:8080/students');
  }
}