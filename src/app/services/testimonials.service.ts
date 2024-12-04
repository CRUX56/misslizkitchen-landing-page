import { Injectable } from '@angular/core';
import TestimonialsData from '../components/testimonials/mocks/testimonials.json';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  constructor() {}

  getTestimonialsData() {
    return TestimonialsData;
  }
}
