import { Component, OnInit } from '@angular/core';

import { ItemMenu } from 'src/app/shared/interfaces/item-menu.interfaces';

import { menuItems } from '../../config/menuItems';
import { Genre, ResponseData, Data } from 'src/app/shared/interfaces/global.interfaces';

import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent implements OnInit {

  public mangaList: Data[] = []
  public genres : Genre[] = [] 
  public nameSearch: string | undefined
  public currentPage = 0
  public totalPages = 0
  public isLoading = true

  constructor(private mangaService: MangaService ){}

  ngOnInit(): void {
    this.getAllMangas()
  }

  get itemMenu(): ItemMenu[] {
    return menuItems
  }

  getAllMangas(){
    this.mangaService
    .getHttpAllManga()
    .subscribe(({ data, pagination }: ResponseData) =>{
      this.updateMangaInfo(
        data,
        pagination.current_page,
        pagination.last_visible_page
      )
      this.isLoading = false
    })
  }

  updateMangaInfo(mangaList: Data[], currentPage: number, totalPages: number){
    this.mangaList = mangaList
    this.currentPage = currentPage
    this.totalPages = totalPages
  }

  onSearchAnime(name: string){
    if(name.length < 1) return
    this.nameSearch = name
    this.mangaService
      .getHttpMangaPerName(this.nameSearch)
      .subscribe(({  data, pagination }: ResponseData) =>{
        this.updateMangaInfo(
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
    this.mangaService
      .getHttpMangaPerPage(this.currentPage, this.nameSearch || '')
      .subscribe(({ data }) =>
        this.mangaList = data
    )
  }
}
