import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTruckAppComponent } from './food-truck-app.component';

describe('FoodTruckAppComponent', () => {
  let component: FoodTruckAppComponent;
  let fixture: ComponentFixture<FoodTruckAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodTruckAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodTruckAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
