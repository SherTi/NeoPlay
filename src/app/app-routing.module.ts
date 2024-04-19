import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {MainLayoutComponent} from "./shared/main-layout/main-layout.component";

const routes: Routes = [
  {path: "" , component:MainLayoutComponent, children:[
      {path : "", component: MainComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
