import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {register} from 'swiper/element';
import Swiper, {Navigation, Pagination, SwiperOptions,} from 'swiper';

@Component({
  selector: '.app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper') swiperContainer?: ElementRef;
  @ViewChild('prev_el') endElem?:ElementRef;
  @ViewChild('next_el') startElem?:ElementRef;
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    register();
    const swiper: SwiperOptions = {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: (this.endElem?.nativeElement as HTMLElement),
        prevEl: (this.startElem?.nativeElement as HTMLElement),
      },
      slidesPerView: 1,
      slidesPerGroup:1,
      spaceBetween: 40,
      freeMode: true,
      speed: 1000,
      on: {
        init: (swiper: Swiper) => {
          this.isEnd = swiper.isEnd;
        },
        toEdge: (swiper: Swiper) => {
          this.isEnd = swiper.isEnd;
          this.isBeginning = swiper.isBeginning;
        },
        fromEdge: (swiper: Swiper) => {
          this.isEnd = swiper.isEnd;
          this.isBeginning = swiper.isBeginning;
        }
      },
      breakpoints: {
        425:{
          slidesPerView: 3.5,
        },
        1000:{
          slidesPerView: 3.9,
        },
        1100:{
          slidesPerView: 4.3,
        },
        1200:{
          slidesPerView: 4.7,
        },
        1300:{
          slidesPerView: 5.1,
        },
        1400:{
          slidesPerView: 5.5,
        },
        1500:{
          slidesPerView: 5.9,
        },
        1600:{
          slidesPerView: 6.3,
        },
        1700:{
          slidesPerView: 6.7,
        },
        1800:{
          slidesPerView: 7.1,
        },
        1900:{
          slidesPerView: 7.5,
        },
        2000:{
          slidesPerView: 7.9,
        },
        2100:{
          slidesPerView: 8.3,
        },
        2200:{
          slidesPerView: 8.7,
        },
        2300:{
          slidesPerView: 9.1,
        },
        2400:{
          slidesPerView: 9.5,
        },
        2500:{
          slidesPerView: 9.9,
        }
      }
    };
    Object.assign(this.swiperContainer?.nativeElement, swiper );
    (this.swiperContainer?.nativeElement as any).initialize()
  }



  isBeginning: boolean = true;
  isEnd: boolean = false;
}
