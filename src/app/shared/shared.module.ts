import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { 
  NavbarComponent, 
  HeaderComponent,
  LazyImageComponent,
  PaginationComponent,
  MenuComponent,
  SearchboxComponent, 
  MenuItemComponent ,
  CardListComponent ,
  CardItemComponent ,
  StatusTagComponent ,
  AsignTagComponent, 
  GenreListTagComponent,
} from './components'

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    LazyImageComponent,
    PaginationComponent,
    MenuComponent,
    SearchboxComponent,
    MenuItemComponent,
    CardListComponent,
    CardItemComponent,
    StatusTagComponent,
    AsignTagComponent,
    GenreListTagComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LazyImageComponent,
    PaginationComponent,
    MenuComponent,
    CardListComponent,
    StatusTagComponent,
    AsignTagComponent,
    GenreListTagComponent
  ]
})
export class SharedModule { }
