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
      slidesPerView: 5.5,
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
          slidesPerView: 3.4,
        }
      }
    };
    Object.assign(this.swiperContainer?.nativeElement, swiper );
    (this.swiperContainer?.nativeElement as any).initialize()
  }



  isBeginning: boolean = true;
  isEnd: boolean = false;
}
