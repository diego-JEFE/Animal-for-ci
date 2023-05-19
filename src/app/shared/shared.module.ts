import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { 
  AsignTagComponent, 
  CardItemComponent ,
  CardListComponent ,
  GenreListTagComponent,
  HeaderComponent,
  LazyImageComponent,
  LoadingComponent,
  MenuComponent,
  MenuItemComponent ,
  NavbarComponent, 
  PaginationComponent,
  SearchboxComponent, 
  StatusTagComponent ,
} from './components'

@NgModule({
  declarations: [
    AsignTagComponent,
    CardItemComponent,
    CardListComponent,
    GenreListTagComponent,
    HeaderComponent,
    LazyImageComponent,
    LoadingComponent,
    MenuComponent,
    MenuItemComponent,
    NavbarComponent,
    PaginationComponent,
    SearchboxComponent,
    StatusTagComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AsignTagComponent,
    CardListComponent,
    GenreListTagComponent,
    HeaderComponent,
    LazyImageComponent,
    LoadingComponent,
    MenuComponent,
    PaginationComponent,
    StatusTagComponent,
  ]
})
export class SharedModule { }
