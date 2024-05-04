import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {MainLayoutComponent} from "./shared/layouts/main-layout/main-layout.component";
import {MoviePageComponent} from "./pages/movie-page/movie-page.component";
import {AboutMovieComponent} from "./pages/about-movie/about-movie.component";
import {ActorsComponent} from "./pages/actors/actors.component";
import {RateComponent} from "./pages/rate/rate.component";
import {SimilarComponent} from "./pages/similar/similar.component";
import {SeriesPageComponent} from "./pages/series-page/series-page.component";
import {ActorsAboutComponent} from "./pages/actors-about/actors-about.component";
import {FavoriteComponent} from "./pages/favorite/favorite.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";
import {MovieComponent} from "./pages/movie/movie.component";
import {ErrorComponent} from "./pages/error/error.component";

const routes: Routes = [
  {path: "" , component:MainLayoutComponent, children:[
      {path : "", component: MainComponent},
      {path: "movie" , component: MoviePageComponent, children: [
        {path : "", redirectTo: "series", pathMatch: "full"},
          {path: "series", component : SeriesPageComponent},
          {path : "about", component:AboutMovieComponent},
          {path: "actors", component: ActorsComponent},
          {path: "rate", component: RateComponent},
          {path: "similar", component: SimilarComponent}
        ]},
      {path: "actor-about", component: ActorsAboutComponent},
      {path: "favorite", component:FavoriteComponent},
      {path: "catalog", component:CatalogComponent},
      {path: "movie-page", component: MovieComponent},
    ]},
  {path: "error", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
