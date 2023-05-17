import { Component, Input } from '@angular/core';
import { Anime } from '../../interfaces/anime.interfaces';

@Component({
  selector: 'anime-card',
  templateUrl: './anime-card.component.html',
  styles: [
  ]
})
export class AnimeCardComponent {
  @Input() item! : Anime
}
