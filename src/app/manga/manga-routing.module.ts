import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { TypePageComponent } from "./pages/type-page/type-page.component";
import { MangaPageComponent } from "./pages/manga-page/manga-page.component";
import { NgModule } from '@angular/core';

const routes : Routes = [
        {
            path: 'types/:type',
            component: TypePageComponent
        },
        {
            path: '' ,
            component: MainPageComponent
         },
         {
             path: ':id',
             component: MangaPageComponent
         },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports :[
        RouterModule
    ]
})
export class MangaRoutingModule {}


