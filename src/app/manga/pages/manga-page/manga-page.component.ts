import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { Data } from 'src/app/shared/interfaces/global.interfaces';

import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'manga-page',
  templateUrl: './manga-page.component.html',
  styles: [
  ]
})
export class MangaPageComponent {
  public manga!: Data
  public isLoading = true

  constructor(
    private activatedRoute: ActivatedRoute,
    private mangaService: MangaService
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) =>  
        this.mangaService.getHttpMangaById(id)
      )
      ).subscribe(( { data } )=> {
          this.manga = data
          this.isLoading = false
          console.log(this.manga)
      })
  }
}
