import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Data } from '../../../shared/interfaces/global.interfaces';

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styles: [
  ]
})
export class AnimePageComponent implements OnInit{

  public anime!: Data
  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService:AnimeService
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) =>  
        this.animeService.getHttpAnimeById(id)
      )
      ).subscribe(( { data } )=> {
          this.anime = data
      })
  }

}
