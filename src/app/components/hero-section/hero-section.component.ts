import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AppReadyService, HeroSliderService } from '../../services';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../index';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HeaderComponent,
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements AfterViewInit, OnDestroy {
  currentIndex = 0;
  slideInterval: any;
  slides: any;

  constructor(
    public appReadyService: AppReadyService,
    public heroSlides: HeroSliderService
  ) {}

  ngAfterViewInit() {
    if (this.appReadyService.isAppReady()) {
      this.getSlideData();
      this.startSlideTimer();
    }
  }

  ngOnDestroy(): void {
    this.clearSlideTimer();
  }

  getSlideData() {
    this.slides = this.heroSlides.getHeroSliderData();
  }

  startSlideTimer() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change every 5 seconds
  }

  clearSlideTimer() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  isSlideActive(index: number): boolean {
    return this.currentIndex === index;
  }

  resetSlideTimer() {
    this.clearSlideTimer();
    this.startSlideTimer();
  }
}
