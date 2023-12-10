import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseRoutingModule } from './course-routing.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent,
    CourseEditComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MatTableModule
  ]
})
export class CourseModule { }
