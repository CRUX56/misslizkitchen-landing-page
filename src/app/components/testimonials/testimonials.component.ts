import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';
import { AppReadyService, TestimonialsService } from '../../services';
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
  currentIndex: number = 0;
  slideInterval: any;
  testimonials: any;

  constructor(
    public appReadyService: AppReadyService,
    private testimonialsService: TestimonialsService
  ) {}

  ngAfterViewInit(): void {
    if (this.appReadyService.isAppReady()) {
      this.testimonials = this.testimonialsService.getTestimonialsData();
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

  scrollLeft(container: HTMLElement) {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(container: HTMLElement) {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }

  isActive(index: number): boolean {
    return this.currentIndex === index;
  }
}
