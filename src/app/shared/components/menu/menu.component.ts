import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemMenu } from 'src/app/shared/interfaces/item-menu.interfaces';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent  {
  @Input() searchPlaceholder = ''
  @Input() isVisible = false
  @Input() itemMenu : ItemMenu[] = []
  @Output() onSearch = new EventEmitter<string>()

  onChangeVisibility(){
    this.isVisible = !this.isVisible
  }

  onValueSearch(value: string){
    this.onSearch.emit(value)
    this.onChangeVisibility()
  }

}
