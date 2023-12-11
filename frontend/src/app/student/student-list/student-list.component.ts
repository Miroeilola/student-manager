import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student';
import { StudentService } from '../student.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Student>();
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email'];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
