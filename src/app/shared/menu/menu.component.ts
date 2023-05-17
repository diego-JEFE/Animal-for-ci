import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  @Input() isVisible = false
}
