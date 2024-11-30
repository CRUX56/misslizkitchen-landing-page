import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppReadyService {
  private isReady: boolean = false;

  constructor() {}

  markAsReady() {
    this.isReady = true;
  }

  isAppReady(): boolean {
    return this.isReady;
  }
}
