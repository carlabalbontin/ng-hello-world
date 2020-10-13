import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id');
      });

  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
