import { Injectable } from '@angular/core';
import heroSliders from '../components/hero-section/mocks/hero-sliders.json';

@Injectable({
  providedIn: 'root',
})
export class HeroSliderService {
  constructor() {}

  getHeroSliderData() {
    return heroSliders;
  }
}
