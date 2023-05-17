import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseAnime } from "../interfaces/anime.interfaces";
import { catchError, of } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class AnimeService {
    
    private uriBase = 'https://api.jikan.moe/v4'

    constructor( private http: HttpClient){}

    getHttpAllAnime() {
        return this.http.get<ResponseAnime>(`${this.uriBase}/anime`)
    }

    getHttpAnimePerPage(page: number){
        return this.http.get<ResponseAnime>(`${this.uriBase}/anime?page=${page}`)
    }
}