import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {register} from 'swiper/element';
import {Navigation, Pagination, SwiperOptions,} from 'swiper';

@Component({
  selector: '.app-movie-h-slider',
  templateUrl: './movie-h-slider.component.html',
  styleUrls: ['./movie-h-slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieHSliderComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper') swiperContainer?: ElementRef;
  @ViewChild('end_elem') endElem?:ElementRef;
  @ViewChild('start_elem') startElem?:ElementRef;
  constructor() {
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    register();
    const swiper: SwiperOptions = {
      modules: [Navigation, Pagination],
      slidesPerView: 4,
      slidesPerGroup:1,
      spaceBetween: 50,
      navigation: {
        nextEl: (this.endElem?.nativeElement as HTMLElement),
        prevEl: (this.startElem?.nativeElement as HTMLElement),
      },
      breakpoints: {
        1920:{
          slidesPerView: 5.4,
        },
        425:{
          slidesPerView: 1.9,
        }
      }

    };
    Object.assign(this.swiperContainer?.nativeElement, swiper);
    (this.swiperContainer?.nativeElement as any).initialize()
  }

}
