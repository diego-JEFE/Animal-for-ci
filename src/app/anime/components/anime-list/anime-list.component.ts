import { Component, Input } from '@angular/core';
import { Anime } from '../../interfaces/anime.interfaces';

@Component({
  selector: 'anime-list',
  templateUrl: './anime-list.component.html',
  styles: [
  ]
})
export class AnimeListComponent {
  @Input() animeList: Anime[] = []
}
