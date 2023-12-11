import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = '/api/courses';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl).pipe(
      catchError(error => {
        console.error('Error fetching courses, returning mock data', error);
        return of(this.mockCourses());
      })
    );
  }

  private mockCourses(): Course[] {
    let courses: Course[] = [];
    for (let i = 1; i <= 10; i++) {
      courses.push({
        id: i.toString(),
        name: `Course ${i}`,
        teacher: `Teacher ${i}`,
      });
    }
    return courses;
  }
}