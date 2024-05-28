import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { MovieCardHComponent } from './shared/components/movie-card-h/movie-card-h.component';
import { MovieHSliderComponent } from './shared/components/movie-h-slider/movie-h-slider.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { SeriesCardComponent } from './shared/components/series-card/series-card.component';
import { SwitchSeasonComponent } from './shared/layouts/switch-season/switch-season.component';
import { ActorsAboutComponent } from './pages/actors-about/actors-about.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { MovieComponent } from './pages/movie/movie.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PSwitchComponent } from './shared/layouts/p-switch/p-switch.component';
import { ProfileMainComponent } from './pages/profile-main/profile-main.component';
import { SafetyComponent } from './pages/safety/safety.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { PayPlatformComponent } from './shared/layouts/pay-platform/pay-platform.component';
import { QrCodeComponent } from './shared/components/qr-code/qr-code.component';
import { CardListComponent } from './shared/components/card-list/card-list.component';
import { CardSaveListComponent } from './shared/components/card-save-list/card-save-list.component';
import { LoginComponent } from './shared/layouts/login/login.component';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { LogupPageComponent } from './shared/components/logup-page/logup-page.component';
import { RecoveryComponent } from './shared/components/recovery/recovery.component';
import { SuccessfullyPageComponent } from './pages/successfully-page/successfully-page.component';
import { SuccessfullyLayoutsComponent } from './shared/layouts/successfully-layouts/successfully-layouts.component';
import { PinIComponent } from './pages/pin-i/pin-i.component';
import { PinUComponent } from './pages/pin-u/pin-u.component';
import { ViewWComponent } from './pages/view-w/view-w.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { KidsPageComponent } from './pages/kids-page/kids-page.component';
import { SubPageComponent } from './pages/sub-page/sub-page.component';
import { BannerSliderComponent } from './shared/components/banner-slider/banner-slider.component';

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
    SeriesCardComponent,
    SwitchSeasonComponent,
    ActorsAboutComponent,
    FavoriteComponent,
    CatalogComponent,
    MovieComponent,
    ErrorComponent,
    ProfileComponent,
    PSwitchComponent,
    ProfileMainComponent,
    SafetyComponent,
    PaymentComponent,
    DevicesComponent,
    PayPlatformComponent,
    QrCodeComponent,
    CardListComponent,
    CardSaveListComponent,
    LoginComponent,
    LoginPageComponent,
    LogupPageComponent,
    RecoveryComponent,
    SuccessfullyPageComponent,
    SuccessfullyLayoutsComponent,
    PinIComponent,
    PinUComponent,
    ViewWComponent,
    EditProfileComponent,
    KidsPageComponent,
    SubPageComponent,
    BannerSliderComponent,
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
