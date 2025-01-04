import { Component } from '@angular/core';
import { MenuComponent } from '../../features';
import {
  AboutComponent,
  CertificationsComponent,
  FoodTruckAppComponent,
  HeaderComponent,
  HeroSectionComponent,
  TestimonialsComponent,
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
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
