import { Component, Input } from '@angular/core';
import { Genre } from 'src/app/shared/interfaces/global.interfaces';


@Component({
  selector: 'genre-list-tag',
  templateUrl: './genre-list-tag.component.html',
  styles: [
  ]
})
export class GenreListTagComponent {
  @Input() genres: Genre[] = []
}
