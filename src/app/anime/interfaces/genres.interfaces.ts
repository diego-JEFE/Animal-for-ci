export interface ResposeGenres {
    data: Genres[];
}

export interface Genres {
    mal_id: number;
    name:   string;
    url:    string;
    count:  number;
}
