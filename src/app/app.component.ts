import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
}

// Structure of module
// different architectural structures
// 1. Use modules create functions
// 2. Two bindings can pose performance issue
// 3. Structural directives - ngSwitch - ngIf
// 4. Life cycle hooks
//  create → render → render children →
//  check when data-bound properties change →
//  destroy → remove from DOM
