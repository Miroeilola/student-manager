import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MenubarComponent } from './menubar/menubar.component';
import { NavigationComponent } from './navigation/navigation.component'
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    MenubarComponent,
    NavigationComponent
  ],
  exports: [
    MenubarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ]
})
export class SharedModule { }
