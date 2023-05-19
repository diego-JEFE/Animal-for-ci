import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemMenu } from 'src/app/shared/interfaces/item-menu.interfaces';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styles: [
  ]
})
export class MenuItemComponent {
  @Input() item!: ItemMenu  

  @Output() onClick = new EventEmitter<boolean>()

  click(){
    this.onClick.emit(true)
  }
}
