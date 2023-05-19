import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { 
    ResponseData, 
    ResponseDataById
} from "../../shared/interfaces/global.interfaces";

@Injectable({
    providedIn: 'root'
})
export class AnimeService {
    
    private uriBase = 'https://api.jikan.moe/v4'

    constructor( private http: HttpClient){}

    getHttpAllAnime() {
        return this.http.get<ResponseData>(`${this.uriBase}/anime`)
    }

    getHttpAnimePerPage(page: number, name?: string, type?: string){
        return this.http.get<ResponseData>(`${this.uriBase}/anime?page=${page}&q=${name || ''}&type=${type || ''}`)
    }

    getHttpAnimePerName(name: string){
        return this.http.get<ResponseData>(`${this.uriBase}/anime?q=${name}`)
    }

    getHttpAnimePerType(type: string, name?: string){
        return this.http.get<ResponseData>(`${this.uriBase}/anime?type=${type}&q=${name || ''}`)
    }

    getHttpAnimeById(id: number){
        return this.http.get<ResponseDataById>(`${this.uriBase}/anime/${id}/full`)
    }
}