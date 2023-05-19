import { Component, Input } from '@angular/core';
import { NavbarItem } from './navbar-items.interface';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() items: NavbarItem[]  = []
}
