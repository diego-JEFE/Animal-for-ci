export interface ResponseAnime {
    pagination: Pagination;
    data:       Anime[];
}

export interface ResponseAnimeById {
    data:       Anime;
}

export interface Anime {
    mal_id:          number;
    url:             string;
    images:          { [key: string]: Image };
    trailer:         Trailer;
    approved:        boolean;
    titles:          Title[];
    title:           string;
    title_english:   string | null;
    title_japanese:  string;
    title_synonyms:  any[];
    type:            string;
    source:          string;
    episodes:        number | null;
    status:          string;
    airing:          boolean;
    aired:           Aired;
    duration:        string;
    rating:          string;
    score:           number;
    scored_by:       number;
    rank:            number;
    popularity:      number;
    members:         number;
    favorites:       number;
    synopsis:        string;
    background:      string | null;
    season:          string | null;
    year:            number | null;
    broadcast:       Broadcast;
    producers:       Genre[];
    licensors:       Genre[];
    studios:         Genre[];
    genres:          Genre[];
    explicit_genres: any[];
    themes:          Genre[];
    demographics:    any[];
}

export interface Aired {
    from:   string;
    to:     string | null;
    prop:   Prop;
    string: string;
}

export interface Prop {
    from: From;
    to:   From;
}

export interface From {
    day:   number | null;
    month: number | null;
    year:  number | null;
}

export interface Broadcast {
    day:      string | null;
    time:     string | null;
    timezone: string | null;
    string:   string | null;
}

export interface Genre {
    mal_id: number;
    type:   string;
    name:   string;
    url:    string;
}

export interface Image {
    image_url:       string;
    small_image_url: string;
    large_image_url: string;
}

export interface Title {
    type:  string;
    title: string;
}

export interface Trailer {
    youtube_id: string | null;
    url:        string | null;
    embed_url:  string | null;
    images:     Images | null;
}

export interface Images {
    image_url:         string | null;
    small_image_url:   string | null;
    medium_image_url:  string | null;
    large_image_url:   string | null;
    maximum_image_url: string | null;
}

export interface Pagination {
    last_visible_page: number;
    has_next_page:     boolean;
    current_page:      number;
    items:             Items;
}

export interface Items {
    count:    number;
    total:    number;
    per_page: number;
}