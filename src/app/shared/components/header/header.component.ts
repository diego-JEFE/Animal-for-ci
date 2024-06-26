import { Component } from '@angular/core';
import { NavbarItem } from '../navbar/navbar-items.interface';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  public img = 'assets/animal-logo-small.png'
  public items: NavbarItem[] = [
    {
      name: 'Anime',
      link: '/anime',
    },
    {
      name: 'Manga',
      link: '/manga',
    },
    {
      name: 'Prueba',
      link: '/manga',
    }
  ]
}
