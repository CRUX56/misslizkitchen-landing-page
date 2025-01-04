import { TestBed } from '@angular/core/testing';

import { HeroSliderService } from './hero-slider.service';

describe('HeroSliderService', () => {
  let service: HeroSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
