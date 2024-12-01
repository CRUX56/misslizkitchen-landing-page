import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AppReadyService } from '../../services/app-ready.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements AfterViewInit, OnDestroy {
  slides = [
    {
      image: 'https//via.placeholder.com/1920x1080',
      title: 'Slide 1 Title',
      description: 'This is the description for Slide 1.',
      buttonText: 'Learn More',
      buttonAction: () => alert('Slide 1 Buutton clicked'),
    },
    {
      image: 'https://via.placeholder.com/1920x1080/ff0000',
      title: 'Slide 2 Title',
      description: 'This is the description for Slide 2.',
      buttonText: 'Read More',
      buttonAction: () => alert('Slide 2 Button Clicked!'),
    },
    {
      image: 'https://via.placeholder.com/1920x1080/00ff00',
      title: 'Slide 3 Title',
      description: 'This is the description for Slide 3.',
      buttonText: 'Get Started',
      buttonAction: () => alert('Slide 3 Button Clicked!'),
    },
  ];

  currentIndex = 0;
  slideInterval: any;

  constructor(public appReadyService: AppReadyService) {}

  ngAfterViewInit() {
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
