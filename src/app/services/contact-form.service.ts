import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  //private apiUrl = 'http://localhost:4200/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(formData: { name: string; email: string; message: string }) {
    return this.http.post('http://localhost:3000/send-email', formData);
  }
}
