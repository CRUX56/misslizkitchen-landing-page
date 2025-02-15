import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  private apiUrl = 'http://localhost:5000/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(formData: { to: string; subject: string; message: string }) {
    return this.http.post(this.apiUrl, formData);
  }
}
