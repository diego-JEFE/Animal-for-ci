import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../interfaces/anime.interfaces';
import { animes } from '../../mock/animes';

@Component({
  selector: 'anime-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  public animeList: Anime[] = [] 
  public currentPage = 0
  public totalPages = 0

  constructor( private animeService: AnimeService){}

  ngOnInit(): void {
    this.animeService.getHttpAllAnime().subscribe(res =>{
        this.animeList = res.data 
        this.currentPage = res.pagination.current_page
        this.totalPages = res.pagination.last_visible_page
      }
    )
  } 

  onChangePageEmmiter(page: number){
    this.currentPage = page
    this.animeService.getHttpAnimePerPage(this.currentPage).subscribe(res =>
      this.animeList = res.data
    )
  }

}
