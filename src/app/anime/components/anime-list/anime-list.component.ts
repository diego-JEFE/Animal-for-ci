import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Anime } from '../../interfaces/anime.interfaces';

@Component({
  selector: 'anime-list',
  templateUrl: './anime-list.component.html',
  styles: [
  ]
})
export class AnimeListComponent {
  @Input() filter : string | undefined
  @Input() nameFilter : string | undefined
  @Input() animeList: Anime[] = []
  @Input() buttonCancel: boolean = false

  @Output() cancelFilter = new EventEmitter<boolean>()

  onCancelFilter(){
    this.cancelFilter.emit(true)
  }
}
