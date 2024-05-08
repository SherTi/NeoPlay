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
import {ProfileComponent} from "./pages/profile/profile.component";
import {ProfileMainComponent} from "./pages/profile-main/profile-main.component";
import {SafetyComponent} from "./pages/safety/safety.component";
import {PaymentComponent} from "./pages/payment/payment.component";
import {DevicesComponent} from "./pages/devices/devices.component";
import {QrCodeComponent} from "./shared/components/qr-code/qr-code.component";
import {CardListComponent} from "./shared/components/card-list/card-list.component";
import {CardSaveListComponent} from "./shared/components/card-save-list/card-save-list.component";
import {LoginComponent} from "./shared/layouts/login/login.component";
import {LoginPageComponent} from "./shared/components/login-page/login-page.component";
import {LogupPageComponent} from "./shared/components/logup-page/logup-page.component";
import {RecoveryComponent} from "./shared/components/recovery/recovery.component";
import {SuccessfullyPageComponent} from "./pages/successfully-page/successfully-page.component";
import {SuccessfullyLayoutsComponent} from "./shared/layouts/successfully-layouts/successfully-layouts.component";
import {PinIComponent} from "./pages/pin-i/pin-i.component";
import {PinUComponent} from "./pages/pin-u/pin-u.component";

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
      {path: "profile", component: ProfileComponent, children: [
          {path: "", redirectTo: "profile-m", pathMatch: "full"},
          {path: "profile-m", component: ProfileMainComponent},
          {path: "safety", component: SafetyComponent},
          {path: "payment", component: PaymentComponent, children:[
            {path: "", redirectTo: "click", pathMatch: "full"},
              {path: "click", component: QrCodeComponent},
              {path: "payMe", component: QrCodeComponent},
              {path:"card", component:QrCodeComponent},
              {path:"addCard", component: CardListComponent},
              {path: "saveCard", component: CardSaveListComponent},
            ]},
          {path: "devices", component: DevicesComponent},
        ]},
    ]},
  {path: "error", component:ErrorComponent},
  {path: "login", component: LoginComponent, children:[
      {path: "", redirectTo: "singIn", pathMatch: "full"},
      {path: "singIn", component: LoginPageComponent},
      {path: "singUp", component: LogupPageComponent},
    ]},
  {path: "recovery", component: RecoveryComponent},
  {path: "successfully", component: SuccessfullyLayoutsComponent, children: [
      {path: "" , redirectTo: "", pathMatch: "full"},
      {path: "", component: SuccessfullyPageComponent},
      {path: "pin", component: PinIComponent},
      {path: "pin-u", component:PinUComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
