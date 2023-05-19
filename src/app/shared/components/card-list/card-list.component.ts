import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data } from '../../interfaces/global.interfaces';


@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styles: [
  ]
})
export class CardListComponent {
  @Input() filter : string | undefined
  @Input() nameFilter : string | undefined
  @Input() cardList: Data[] = []
  @Input() buttonCancel: boolean = false

  @Output() cancelFilter = new EventEmitter<boolean>()

  onCancelFilter(){
    this.cancelFilter.emit(true)
  }
}
