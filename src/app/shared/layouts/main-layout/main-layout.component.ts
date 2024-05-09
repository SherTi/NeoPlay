import {Component, HostListener} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  animations: [
    trigger('headerAnimate', [
      transition(':enter', [
        style({
          transform: "translateY(-100%)",
        }),
        animate("0.2s", style({
          transform: "translateY(0)"
        }))
      ]),
      transition(':leave', [
        style({
          transform: "translateY(0)",
        }),
        animate("0.2s", style({
          transform: "translateY(-100%)"
        }))
      ])
    ]),
  ]
})
export class MainLayoutComponent {
  scrolled:boolean = true;
  lastScroll:number = 0;
  showBlock:boolean = false;
  isOpen: boolean = false;
  menu: boolean = false;
  switchLang: boolean = false;



  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.scrolled && this.lastScroll > window.scrollY) {
      this.scrolled = true;
    } else if (this.scrolled && this.lastScroll < window.scrollY) {
      this.scrolled = false;
    }
    this.lastScroll = window.scrollY;
  }

}
