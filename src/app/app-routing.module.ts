import { NgModule } from "@angular/core";
import { RouterModule ,Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'anime',
        loadChildren: ()=> import('./anime/anime.module').then(m => m.AnimeModule)
    },
    {
        path: 'manga',
        loadChildren: ()=> import('./anime/anime.module').then(m => m.AnimeModule)
    },
    {
        path: '**',
        redirectTo: 'anime'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}