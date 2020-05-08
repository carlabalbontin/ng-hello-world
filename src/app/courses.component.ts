import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <div>
      <input [(ngModel)]="userInput" />
    </div>
    <p>{{ userInput | titleCase }}

  `
})
export class CoursesComponent {
  userInput = '';
}
