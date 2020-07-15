import { Component, OnInit } from '@angular/core';
import { FollowersService } from 'src/app/services/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers: any;

  constructor(private service: FollowersService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(followers => this.followers = followers)
  }

}
