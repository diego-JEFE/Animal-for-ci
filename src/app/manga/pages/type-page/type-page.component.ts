import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemMenu } from 'src/app/shared/interfaces/item-menu.interfaces';
import { menuItems } from '../../config/menuItems';
import { switchMap } from 'rxjs';
import { MangaService } from '../../services/manga.service';
import { Data, ResponseData } from 'src/app/shared/interfaces/global.interfaces';

@Component({
  selector: 'type-page',
  templateUrl: './type-page.component.html',
  styles: [
  ]
})
export class TypePageComponent {
  public type!: string
  public nameSearch: string | undefined
  public magaList: Data[] = []
  public cancelFilter: boolean = false
  public currentPage = 0
  public totalPages = 0
  public isLoading = true

  constructor(
    private activeRoute: ActivatedRoute,
    private mangaService: MangaService
    
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
        switchMap(({ type })=>  this.mangaService.getHttpMangaPerType(type))
      )
      .subscribe( ( { data, pagination })  =>{
        this.updateAnimeInfo(
          data,
          pagination.current_page,
          pagination.last_visible_page,
          data[0].type
        )
        this.isLoading = false
      })
  }

  updateAnimeInfo(magaList: Data[], currentPage: number, totalPages: number, type?: string){
    this.magaList = magaList
    this.currentPage = currentPage
    this.totalPages = totalPages
    this.type = type || this.type
  }

  onSearchAnime(name: string){
    if(name.length < 1) return
    this.nameSearch = name
    this.mangaService
      .getHttpMangaPerType(this.type, this.nameSearch)
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
    this.mangaService
      .getHttpMangaPerPage(this.currentPage, '', this.type)
      .subscribe(({ data }) =>
        this.updateAnimeInfo(
          data,
          this.currentPage,
          this.totalPages
        ) 
    )
  }
}
