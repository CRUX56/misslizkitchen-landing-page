import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { 
        path: "about-miss-lizzs-kitchen",
        loadComponent: () => import('./features/about/about.component').then(c => c.AboutComponent),
    },
    {
        path: "certifications",
        loadComponent: () => import('./features/certifications/certifications.component').then(c => c.CertificationsComponent),
    },
    {
        path: "menu",
        loadComponent: () => import('./features/menu/menu.component').then(c => c.MenuComponent),
    },
    {
        path: "app-coming-soon",
        loadComponent: () => import('./features/food-truck-app/food-truck-app.component').then(c => c.FoodTruckAppComponent),
    },
    {
        path: "testimonials",
        loadComponent: () => import('./features/testimonials/testimonials.component').then(c => c.TestimonialsComponent),
    },
    {
        path: "**",
        loadComponent: () => import('./features/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent),
    }
];
