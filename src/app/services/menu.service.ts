import { Injectable } from '@angular/core';
import MenuItems from '../features/menu/mocks/featured-menu-items.json';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  getMenuItems() {
    return MenuItems;
  }
}
