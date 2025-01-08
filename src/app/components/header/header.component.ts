import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
