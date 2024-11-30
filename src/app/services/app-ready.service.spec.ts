import { TestBed } from '@angular/core/testing';

import { AppReadyService } from './app-ready.service';

describe('AppReadyService', () => {
  let service: AppReadyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppReadyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
