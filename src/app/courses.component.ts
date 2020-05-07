import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <input #email (keyup.enter)="onKeyEnter(email.value)"/>
  `
})
export class CoursesComponent {
  onKeyEnter(email) {
    console.log(email);
  }
}
