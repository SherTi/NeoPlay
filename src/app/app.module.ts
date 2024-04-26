import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { MovieCardHComponent } from './shared/components/movie-card-h/movie-card-h.component';
import { MovieHSliderComponent } from './shared/components/movie-h-slider/movie-h-slider.component';
import Swiper from "swiper";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { AboutMovieComponent } from './shared/components/about-movie/about-movie.component';
import { ActorsComponent } from './shared/components/actors/actors.component';
import { RateComponent } from './shared/components/rate/rate.component';
import { SimilarComponent } from './shared/components/similar/similar.component';
import { SwitchComponent } from './shared/layouts/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainLayoutComponent,
    MovieCardHComponent,
    MovieHSliderComponent,
    MovieCardComponent,
    SliderComponent,
    MoviePageComponent,
    AboutMovieComponent,
    ActorsComponent,
    RateComponent,
    SimilarComponent,
    SwitchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
