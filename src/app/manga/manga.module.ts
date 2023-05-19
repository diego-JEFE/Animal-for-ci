import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TypePageComponent } from './pages/type-page/type-page.component';
import { MangaPageComponent } from './pages/manga-page/manga-page.component';
import { MangaRoutingModule } from './manga-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainPageComponent,
    TypePageComponent,
    MangaPageComponent,
  ],
  imports: [
    CommonModule,
    MangaRoutingModule,
    SharedModule
  ]
})
export class MangaModule { }
