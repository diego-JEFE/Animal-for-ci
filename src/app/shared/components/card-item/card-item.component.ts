import { Component, Input } from '@angular/core';
import { Data } from '../../interfaces/global.interfaces';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html'
})
export class CardItemComponent {
  @Input() item! : Data
  @Input() baseModule! : string
}
