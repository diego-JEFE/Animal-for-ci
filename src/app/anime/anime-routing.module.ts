import { NgModule } from "@angular/core";
import { RouterModule ,Routes } from '@angular/router';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { TypesPageComponent } from "./pages/types-page/types-page.component";
import { AnimePageComponent } from "./pages/anime-page/anime-page.component";


const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: ':id',
        component: AnimePageComponent
    },
    {
        path: 'types/:type',
        component: TypesPageComponent
    }
]

@NgModule ({
    imports :[
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})  
export class AnimeRoutingModule {}