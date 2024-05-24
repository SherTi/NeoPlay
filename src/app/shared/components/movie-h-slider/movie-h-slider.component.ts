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
      loop: true,
      breakpoints: {
        425:{
          slidesPerView: 1.9,
        },
        1000:{
          slidesPerView: 2.8,
        },
        1100:{
          slidesPerView: 3,
        },
        1200:{
          slidesPerView: 3.3,
        },
        1300:{
          slidesPerView: 3.6,
        },
        1400:{
          slidesPerView: 3.9,
        },
        1500:{
          slidesPerView: 4.1,
        },
        1600:{
          slidesPerView: 4.5,
        },
        1700:{
          slidesPerView: 4.8,
        },
        1800:{
          slidesPerView: 5.1,
        },
        1900:{
          slidesPerView: 5.3,
        },
        2000:{
          slidesPerView: 5.7,
        },
        2100:{
          slidesPerView: 5.9,
        },
        2200:{
          slidesPerView: 6.2,
        },
        2300:{
          slidesPerView: 6.5,
        },
        2400:{
          slidesPerView: 6.8,
        },
        2500:{
          slidesPerView: 7,
        }
      }

    };
    Object.assign(this.swiperContainer?.nativeElement, swiper);
    (this.swiperContainer?.nativeElement as any).initialize()
  }

}
