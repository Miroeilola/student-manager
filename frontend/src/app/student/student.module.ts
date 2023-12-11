import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentRoutingModule } from './student-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class StudentModule { }
