import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyEnter()"/>
  `
})
export class CoursesComponent {
  email = 'me@example.com';

  onKeyEnter() {
    console.log(this.email);
  }
}
