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
