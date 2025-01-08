import { Component } from '@angular/core';
import { MenuComponent } from '../../features';
import {
  HeroSectionComponent,
  AboutComponent,
  CertificationsComponent,
  FoodTruckAppComponent,
  TestimonialsComponent,
  FooterComponent,
} from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutComponent,
    CertificationsComponent,
    MenuComponent,
    FoodTruckAppComponent,
    TestimonialsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',

  styleUrl: './home.component.css',
})
export class HomeComponent {}
