import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about-miss-lizzs-kitchen',
    title: 'About Miss Lizzs Kitchen',
    loadComponent: () =>
      import('./features/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'certifications',
    title: 'Certifications',
    loadComponent: () =>
      import('./features/certifications/certifications.component').then(
        (c) => c.CertificationsComponent
      ),
  },
  {
    path: 'menu',
    title: 'Menu',
    loadComponent: () =>
      import('./features/menu/menu.component').then((c) => c.MenuComponent),
  },
  {
    path: 'app-coming-soon',
    title: 'App Coming Soon',
    loadComponent: () =>
      import('./features/food-truck-app/food-truck-app.component').then(
        (c) => c.FoodTruckAppComponent
      ),
  },
  {
    path: 'testimonials',
    title: 'Testimonials',
    loadComponent: () =>
      import('./features/testimonials/testimonials.component').then(
        (c) => c.TestimonialsComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent
      ),
  },
];
