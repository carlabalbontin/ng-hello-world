import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {

  archives = [
    { year: 2007, month: 1},
    { year: 2007, month: 2},
    { year: 2007, month: 3}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
