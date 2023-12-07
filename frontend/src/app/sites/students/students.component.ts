import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
    dataSource = new MatTableDataSource<Student>();
    displayedColumns: string[] = ['id', 'name', 'email'];

    constructor(private studentService: StudentService) { }

    ngOnInit() {
        this.studentService.getStudents().subscribe((data) => {
            this.dataSource.data = data;
        });
    }
}
