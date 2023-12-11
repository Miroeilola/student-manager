import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = '/api/students';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl).pipe(
      catchError(error => {
        console.error('Error fetching students, returning mock data', error);
        return of(this.mockStudents());
      })
    );
  }

  private mockStudents(): Student[] {
    let students: Student[] = [];
    for (let i = 1; i <= 10; i++) {
      students.push({
        id: i,
        firstname: `Firstname ${i}`,
        lastname: `Lastname ${i}`,
        email: `Email ${i}`
      });
    }
    return students;
  }
}