import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./features/about/about.component";
import { CertificationsComponent } from "./features/certifications/certifications.component";
import { MenuComponent } from "./features/menu/menu.component";
import { TestimonialsComponent } from "./features/testimonials/testimonials.component";
import { ContactFormComponent } from "./features/contact-form/contact-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, CertificationsComponent, MenuComponent, TestimonialsComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'misslizkitchen-landing-page';
}
