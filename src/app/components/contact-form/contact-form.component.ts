import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormService } from '../../services/contact-form.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule, // Required for HttpClient
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private contactService: ContactFormService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.sendEmail(this.contactForm.value).subscribe(
        () => {
          this.snackBar.open('Email sent successfully!', 'Close', {
            duration: 3000,
          });
          this.contactForm.reset();
        },
        (error) => {
          this.snackBar.open(
            'Failed to send email. Please try again later.',
            'Close',
            {
              duration: 3000,
            }
          );
          console.error('Error:', error);
        }
      );
    } else {
      this.snackBar.open('Please fill out the form correctly.', 'Close', {
        duration: 3000,
      });
    }
  }
}
