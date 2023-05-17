import { NgModule } from "@angular/core";
import { RouterModule ,Routes } from '@angular/router';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { GenresPageComponent } from "./pages/genres-page/categories-page.component";
import { TypesPageComponent } from "./pages/types-page/types-page.component";


const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'genres',
        component: GenresPageComponent
    },
    {
        path: 'types',
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