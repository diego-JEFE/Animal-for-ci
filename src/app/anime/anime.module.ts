import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TypesPageComponent } from './pages/types-page/types-page.component';
import { AnimeRoutingModule } from './anime-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AnimePageComponent } from './pages/anime-page/anime-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    TypesPageComponent,
    AnimePageComponent,
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    SharedModule
  ]
})
export class AnimeModule { }
