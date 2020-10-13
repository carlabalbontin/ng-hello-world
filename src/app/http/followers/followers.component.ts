import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FollowersService } from 'src/app/services/followers.service';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { NotFoundError } from 'src/app/common/errors/not-found-error';
// import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers: any;

  constructor(
    private route: ActivatedRoute,
    private service: FollowersService) { }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .pipe(
        switchMap(combined => {
          console.log(combined);
          // let id = combined[0].get('id');
          let page = combined[1].get('page');
          return this.service.getAll();
        })
      )
      .subscribe(
        followers => this.followers = followers,
        error => {
          if (error instanceof NotFoundError) {
            alert('Page not found');
          } else {
            throw error;
          }
        }
      );
  }

}
