import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  template: `
    <h2>Welcome to Angular Tasks</h2>
    <button mat-button color="primary" routerLink="/calc">1. Open Calculator</button> <br>
    <button mat-button color="primary" routerLink="/user-registration">2. Register User</button>
  `,
  styles: ``
})
export class HomeComponent {

}
