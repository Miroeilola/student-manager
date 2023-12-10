import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
  isNavigationOpen: boolean = false;

  constructor(
    private dialog: MatDialog
  ) { }

  openNavigation() {
    this.dialog.open(NavigationComponent);
    this.isNavigationOpen = true;

    this.dialog.afterAllClosed.subscribe(() => {
      this.isNavigationOpen = false;
    });
  }
}
