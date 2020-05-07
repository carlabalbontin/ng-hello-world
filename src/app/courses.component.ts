import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    {{ text | summary:10 }}
  `
})
export class CoursesComponent {
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nisl a justo faucibus facilisis. Sed eros ipsum, sodales non sem nec, consectetur ultricies ante. Nulla dignissim lacus nunc, non lobortis enim molestie quis. Sed consectetur et lectus ac tempor. Curabitur augue ex, congue sed imperdiet iaculis, sollicitudin fermentum urna. Donec bibendum finibus pharetra. Fusce libero enim, lobortis tincidunt aliquam eu, molestie sit amet sapien. Donec aliquam bibendum velit, at mollis dui tincidunt eget. Duis vitae sollicitudin massa. Sed ac fermentum quam. Integer a eleifend lacus, vitae consectetur mauris.';

}
