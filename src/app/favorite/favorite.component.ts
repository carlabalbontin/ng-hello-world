import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite: boolean;
  // tslint:disable-next-line: no-output-native
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeFavorite() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }

}
