import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/models/course';
import { CourseService } from '../course.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Course>();
  displayedColumns: string[] = ['id', 'name', 'teacher'];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
