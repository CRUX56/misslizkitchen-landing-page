import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MenuService } from '../../services';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, MatCardModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }
}
