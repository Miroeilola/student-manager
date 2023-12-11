import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseRoutingModule } from './course-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent,
    CourseEditComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class CourseModule { }
