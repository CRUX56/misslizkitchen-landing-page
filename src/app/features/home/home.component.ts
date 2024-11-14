import { Component } from '@angular/core';
import {
  AboutComponent,
  CertificationsComponent,
  FoodTruckAppComponent,
  MenuComponent,
} from '../../features';
import {
  HeaderComponent,
  HeroSectionComponent,
  TestimonialsComponent,
  ContactFormComponent,
  FooterComponent,
} from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    AboutComponent,
    CertificationsComponent,
    MenuComponent,
    FoodTruckAppComponent,
    TestimonialsComponent,
    ContactFormComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
