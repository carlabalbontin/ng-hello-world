import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('favorite changed: ', eventArgs.newValue);
  }
}
