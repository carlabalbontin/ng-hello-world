import { Component } from '@angular/core';

interface FavoriteChangedEventArgs {
  newValue: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('favorite changed: ', eventArgs.newValue);
  }
}
