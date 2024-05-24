import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent {
  stars: number[] = [1,2,3,4,5];
  selectedValue: number = 0;
  isMouseover:boolean = true;

  countStar(star: number) {
    this.isMouseover = false;
    this.selectedValue = star;
  }

  addClass(star: number) {
    if (this.isMouseover) {
      this.selectedValue = star;
    }
  }

  removeClass() {
    if (this.isMouseover) {
      this.selectedValue = 0;
    }
  }
}
