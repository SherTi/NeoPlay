import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {register} from "swiper/element";
import Swiper, {Navigation, Pagination, SwiperOptions} from "swiper";

@Component({
  selector: '.app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BannerSliderComponent implements AfterViewInit {
   @ViewChild('swiper') swiperContainer?: ElementRef;

  constructor() {
  }
 ngAfterViewInit() {
    register();

    const swiper : SwiperOptions = {
      modules: [Navigation, Pagination],
      navigation: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        enabled: true,
        clickable: true,
        el:'.swiper-pagination',
        type:'bullets',
        bulletClass:'dots',
        bulletActiveClass:"active_dots",
      },

    }
    Object.assign(this.swiperContainer?.nativeElement, swiper);
   (this.swiperContainer?.nativeElement as any).initialize()
 }
}
