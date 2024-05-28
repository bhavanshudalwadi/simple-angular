import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  template: `
    <mat-toolbar color="primary">
      <span>Angular Tasks</span>
      <span class="toolbar-spacer"></span>
      <button mat-icon-button aria-label="Calc" routerLink="/">
        <mat-icon>home</mat-icon>
      </button>
      <button mat-icon-button aria-label="Calc" routerLink="/calc">
        <mat-icon>calculate</mat-icon>
      </button>
      <button mat-icon-button aria-label="Calc" routerLink="/user-registration">
        <mat-icon>person</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: `
    .toolbar-spacer {
      flex: 1 1 auto;
    }
  `
})
export class HeaderComponent {

}
