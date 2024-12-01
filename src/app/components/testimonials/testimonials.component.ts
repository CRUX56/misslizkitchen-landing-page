import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';
import { AppReadyService } from '../../services/app-ready.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  testimonials = [
    {
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      testimonial: 'The food here is fantastic! It completly changed my life!',
    },
    {
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/150/ff0000',
      testimonial: 'Amazing service and excellent customer support!',
    },
    {
      name: 'Sam Wilson',
      image: 'https://via.placeholder.com/150/00ff00',
      testimonial: 'Highly recommend this to everyone. Five stars!',
    },
  ];

  currentIndex: number = 0;
  slideInterval: any;

  constructor(public appReadyService: AppReadyService) {}

  ngAfterViewInit(): void {
    if (this.appReadyService.isAppReady()) {
      this.startSlideTimer();
    }
  }

  ngOnDestroy(): void {
    this.clearSlideTimer();
  }

  startSlideTimer() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  clearSlideTimer() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  isActive(index: number): boolean {
    return this.currentIndex === index;
  }
}
