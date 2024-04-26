import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {MainLayoutComponent} from "./shared/layouts/main-layout/main-layout.component";
import {MoviePageComponent} from "./pages/movie-page/movie-page.component";
import {AboutMovieComponent} from "./shared/components/about-movie/about-movie.component";
import {ActorsComponent} from "./shared/components/actors/actors.component";
import {RateComponent} from "./shared/components/rate/rate.component";
import {SimilarComponent} from "./shared/components/similar/similar.component";

const routes: Routes = [
  {path: "" , component:MainLayoutComponent, children:[
      {path : "", component: MainComponent},
      {path: "movie" , component: MoviePageComponent, children: [
        {path : "", redirectTo: "about", pathMatch: "full"},
          {path : "about", component:AboutMovieComponent},
          {path: "actors", component: ActorsComponent},
          {path: "rate", component: RateComponent},
          {path: "similar", component: SimilarComponent}
        ]},

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
