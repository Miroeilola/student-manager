import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './sites/login/login.component';
import { CoursesComponent } from './sites/courses/courses.component';
import { StudentsComponent } from './sites/students/students.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './sites/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentsComponent,
    CoursesComponent,
    CoursesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }