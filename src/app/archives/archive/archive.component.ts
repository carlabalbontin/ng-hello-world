import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  year: string;
  month: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.year = this.route.snapshot.paramMap.get('year');
    this.month = this.route.snapshot.paramMap.get('month');
  }

  viewAll() {
    this.router.navigate(['/archives']);
  }

}
