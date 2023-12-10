import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/models/course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  dataSource = new MatTableDataSource<Course>();
  displayedColumns: string[] = ['id', 'name', 'teacher'];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.dataSource.data = data;
    });
  }
}
