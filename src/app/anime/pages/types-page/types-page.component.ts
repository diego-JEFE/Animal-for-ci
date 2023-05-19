import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap ,} from 'rxjs';

import { Data, ResponseData } from '../../../shared/interfaces/global.interfaces';
import { ItemMenu } from '../../../shared/interfaces/item-menu.interfaces';

import { menuItems } from '../../config/menuItems';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'anime-types-page',
  templateUrl: './types-page.component.html',
})

export class TypesPageComponent implements OnInit {
    
  public type!: string
  public nameSearch: string | undefined
  public animeList: Data[] = []
  public cancelFilter: boolean = false
  public currentPage = 0
  public totalPages = 0 

  constructor(
    private activeRoute: ActivatedRoute,
    private animeService: AnimeService
    
  ){}

  ngOnInit(): void {
    this.getAnimesPerType()
  }

  get itemsMenu (): ItemMenu[] {
    return menuItems
  }

  getAnimesPerType(){
    this.activeRoute.params
      .pipe(
        switchMap(({ type })=>  this.animeService.getHttpAnimePerType(type))
      )
      .subscribe( ( { data, pagination })  =>{
        this.updateAnimeInfo(
          data,
          pagination.current_page,
          pagination.last_visible_page,
          data[0].type
        )
      })
  }

  updateAnimeInfo(animeList: Data[], currentPage: number, totalPages: number, type?: string){
    this.animeList = animeList
    this.currentPage = currentPage
    this.totalPages = totalPages
    this.type = type || this.type
  }

  onSearchAnime(name: string){
    if(name.length < 1) return
    this.nameSearch = name
    this.animeService
      .getHttpAnimePerType(this.type, this.nameSearch)
      .subscribe(({ data, pagination }: ResponseData) =>{
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
        this.updateAnimeInfo(
          data,
          this.currentPage,
          this.totalPages
        ) 
    )
  }
}
