import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap ,} from 'rxjs';

import { Anime, ResponseAnime } from '../../interfaces/anime.interfaces';

import { AnimeService } from '../../services/anime.service';
import { menuItems } from '../../mocks/menuItems';
import { ItemMenu } from '../../interfaces/item-menu.interfaces';

@Component({
  selector: 'anime-types-page',
  templateUrl: './types-page.component.html',
})
export class TypesPageComponent implements OnInit {
    
  public type!: string
  public nameSearch: string | undefined
  public animeList: Anime[] = []
  public cancelFilter: boolean = false
  public currentPage = 0
  public totalPages = 0 

  constructor(
    private activeRoute: ActivatedRoute,
    private animeService: AnimeService
    
  ){}

  ngOnInit(): void {
    this.activeRoute.params
    .pipe(
      switchMap(({ type })=>  this.animeService.getHttpAnimePerType(type))
    )
    .subscribe( ( { data, pagination })  =>{
      this.animeList = data
      this.currentPage = pagination.current_page
      this.totalPages = pagination.last_visible_page
      this.type = data[0].type
    })
  }

  get itemsMenu (): ItemMenu[] {
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
      .getHttpAnimePerType(this.type, this.nameSearch)
      .subscribe(({ data, pagination }: ResponseAnime) =>{
        this.updateAnimeInfo(
          data,
          pagination.current_page,
          pagination.last_visible_page
        )
      })
      this.cancelFilter = true
  }

  onCancelSearch(){
    this.onSearchAnime(' ')
    this.nameSearch = undefined
    this.cancelFilter = false
  }

  onChangePageEmmiter(page: number){
    this.currentPage = page
    this.animeService
      .getHttpAnimePerPage(this.currentPage, '', this.type)
      .subscribe(({ data }) =>
        this.animeList = data
    )
  }
}
