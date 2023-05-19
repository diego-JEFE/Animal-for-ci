import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, of } from 'rxjs'

import { 
    ResponseData, 
    ResponseDataById
} from "../../shared/interfaces/global.interfaces";

@Injectable({
    providedIn: 'root'
})
export class MangaService {
    
    private uriBase = 'https://api.jikan.moe/v4'

    constructor( private http: HttpClient){}

    getHttpAllManga() {
        return this.http.get<ResponseData>(`${this.uriBase}/manga`)
    }

    getHttpMangaPerPage(page: number, name?: string, type?: string){
        return this.http.get<ResponseData>(`${this.uriBase}/manga?page=${page}&q=${name || ''}&type=${type || ''}`)
    }

    getHttpMangaPerName(name: string){
        return this.http.get<ResponseData>(`${this.uriBase}/manga?q=${name}`)
    }

    getHttpMangaPerType(type: string, name?: string){
        return this.http.get<ResponseData>(`${this.uriBase}/manga?type=${type}&q=${name || ''}`)
    }

    getHttpMangaById(id: number){
        return this.http.get<ResponseDataById>(`${this.uriBase}/manga/${id}`)
    }
}