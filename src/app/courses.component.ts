import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <section>
    <h2>NgFor</h2>
    <button (click)="loadCourses()">Load Courses</button>
    <ul>
      <li *ngFor="let course of courses; index as i; trackBy: trackCourses">
        {{ i }} - {{ course.name }}
      </li>
    </ul>
  </section>

  `
})
export class CoursesComponent {
  courses;

  loadCourses() {
    this.courses = [
      {
        id: 1,
        name: 'First course'
      },
      {
        id: 2,
        name: 'Second course'
      },
      {
        id: 3,
        name: 'Third course'
      }
    ];
  }

  trackCourses(index, course) {
    return course ? course.id : undefined;
  }
}
