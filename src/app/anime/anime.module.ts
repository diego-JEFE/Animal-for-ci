import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TypesPageComponent } from './pages/types-page/types-page.component';
import { AnimeRoutingModule } from './anime-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { AnimeCardComponent } from './components/anime-card/anime-card.component';

@NgModule({
  declarations: [
    MainPageComponent,
    TypesPageComponent,
    AnimeListComponent,
    AnimeCardComponent
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    SharedModule
  ]
})
export class AnimeModule { }
