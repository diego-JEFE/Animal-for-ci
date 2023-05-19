import { Component, Input } from '@angular/core';
import { Anime } from '../../anime/interfaces/anime.interfaces';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html'
})
export class CardItemComponent {
  @Input() item! : Anime
}
