import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseAnime } from "../interfaces/anime.interfaces";
import { ResposeGenres } from "../interfaces/genres.interfaces";
import { ItemMenu } from "../interfaces/item-menu.interfaces";

@Injectable({
    providedIn: 'root'
})
export class AnimeService {
    
    private uriBase = 'https://api.jikan.moe/v4'

    constructor( private http: HttpClient){}

    getHttpAllAnime() {
        return this.http.get<ResponseAnime>(`${this.uriBase}/anime`)
    }

    getHttpAnimePerPage(page: number, name?: string, type?: string){
        return this.http.get<ResponseAnime>(`${this.uriBase}/anime?page=${page}&q=${name || ''}&type=${type || ''}`)
    }

    getHttpAnimePerName(name: string){
        return this.http.get<ResponseAnime>(`${this.uriBase}/anime?q=${name}`)
    }

    getHttpAnimePerType(type: string, name?: string){
        return this.http.get<ResponseAnime>(`${this.uriBase}/anime?type=${type}&q=${name || ''}`)
    }

}