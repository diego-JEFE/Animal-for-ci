import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { Anime, ResponseAnime } from '../../interfaces/anime.interfaces';
import { Genres } from '../../interfaces/genres.interfaces';
import { ItemMenu } from '../../interfaces/item-menu.interfaces';
import { menuItems } from '../../mocks/menuItems';

@Component({
  selector: 'anime-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  public animeList: Anime[] = []
  public genres : Genres[] = [] 
  public nameSearch: string | undefined
  public currentPage = 0
  public totalPages = 0

  constructor( private animeService: AnimeService){}

  ngOnInit(): void {
    this.animeService
      .getHttpAllAnime()
      .subscribe(({ data, pagination }: ResponseAnime) =>{
        this.updateAnimeInfo(
          data,
          pagination.current_page,
          pagination.last_visible_page
        )
      })
  } 

  get itemMenu (): ItemMenu[]{
    return menuItems
  }
  
  updateAnimeInfo(animeList: Anime[], currentPage: number, totalPages: number){
    this.animeList = animeList
    this.currentPage = currentPage
    this.totalPages = totalPages
  }

  onSearchAnime(name: string){
    if(name.length < 1) return
    this.nameSearch = name
    this.animeService
      .getHttpAnimePerName(this.nameSearch)
      .subscribe(({  data, pagination }: ResponseAnime) =>{
        this.updateAnimeInfo(
          data,
          pagination.current_page,
          pagination.last_visible_page
        )
      })
  }

  onCancelSearch(){
    this.onSearchAnime(' ')
    this.nameSearch = undefined
  }

  onChangePageEmmiter(page: number){
    this.currentPage = page
    this.animeService
      .getHttpAnimePerPage(this.currentPage, this.nameSearch || '')
      .subscribe(({ data }) =>
        this.animeList = data
    )
  }
}
