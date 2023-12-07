import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './sites/students/students.component';
import { CoursesComponent } from './sites/courses/courses.component';
import { LoginComponent } from './sites/login/login.component';
import { RegisterComponent } from './sites/register/register.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
