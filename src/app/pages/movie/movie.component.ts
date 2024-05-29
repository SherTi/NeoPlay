import { Component } from '@angular/core';
import {animate, animation, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  animations: [
    trigger("filter" , [
      transition(':enter', [
        animation([
          style({
            transform: "translateY(-50%)",
          }),
          animate("0.3s", style({
            transform: "translateY(0)"
          }))
        ])
      ]),
      transition(':leave', [
        animation([
          style({
            transform: "translateY(0)",
          }),
          animate( "0.3s", style({
            transform: "translateY(-100%)"
          }))
        ])
      ])
    ]),
  ]
})
export class MovieComponent {
  filterSelect: boolean = false;
  filterSelect1: boolean = false;
  filterSelect2: boolean = false;
  filterSelect3: boolean = false;
  filterSelect4:  boolean = false;


}
