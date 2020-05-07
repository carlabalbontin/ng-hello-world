import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <img src="{{ imageUrl }}" />
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  imageUrl = 'http://lorempixel.com/400/200';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
