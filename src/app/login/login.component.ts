import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
interface LoginResponse {
  message: string;
  token: string; 
  user: {
    name: string;
    email: string;
    city: string;
    state: string;
  };
}
interface CaptchaResponse {
  captchaImage: string; // Base64-encoded CAPTCHA image
  captchaId: string;    // Unique CAPTCHA ID
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  captchaImage: SafeUrl = ''; // Update the type to SafeUrl

  captchaId: string = ''; // CAPTCHA ID from the backend

  ngOnInit() {
    this.fetchCaptcha(); // Fetch CAPTCHA when the component is initialized
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>,
    private snackBar: MatSnackBar,
    private sanitizer: DomSanitizer
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required]], 
      captchaAnswer: ['', [Validators.required]], // Field for CAPTCHA answer
    });
  }

  // Fetch CAPTCHA from backend
  fetchCaptcha() {
    this.http.get<CaptchaResponse>(`${environment.backendurl}/captcha/generate`, { observe: 'response' })
      .subscribe(response => {
        const base64Captcha = response.body.captchaImage;
        if (base64Captcha) {
          // Sanitize and cast SafeUrl to string
          this.captchaImage = this.sanitizer.bypassSecurityTrustUrl(`${base64Captcha}`) as string;
        }
        

        this.captchaId = response.body.captchaId || '';
      }, error => {
        console.error('Failed to fetch CAPTCHA:', error);
        this.snackBar.open('Failed to load CAPTCHA. Please try again.', 'Close', {
          duration: 3000,
          panelClass: ['error-snack-bar'],
        });
      });
  }

  // Login handler
  onLogin() {
    if (this.loginForm.valid) {
      const formData = {
        ...this.loginForm.value,
        captchaId: this.captchaId, // Include CAPTCHA ID
      };

      let headers = new HttpHeaders();
      const token = localStorage.getItem('token'); 
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }

      this.http.post<LoginResponse>(`${environment.backendurl}/login`, formData, { headers, observe: 'response' })
        .pipe(
          catchError(error => {
            console.error('Login error:', error);

            let errorMessage = 'An error occurred. Please try again later.';
            if (error.error.message) {
              errorMessage = error.error.message;
            } else if (error.status === 400) {
              errorMessage = 'Invalid CAPTCHA or login credentials.';
            }
            this.fetchCaptcha();
            this.snackBar.open(errorMessage, 'Close', {
              duration: 3000,
              panelClass: ['error-snack-bar'],
            });
            return throwError(error);
          })
        )
        .subscribe(response => {
          const newToken = response.body.token;
          const userName = response.body.user.name;

          if (newToken) {
            localStorage.setItem('token', newToken);
            localStorage.setItem('userName', userName);
          }

          this.snackBar.open('Login successful!', 'Close', {
            duration: 3000,
            panelClass: ['success-snack-bar'],
          });

          this.dialogRef.close();
          this.router.navigate(['/dashboard']);
        });
    } else {
      
      this.snackBar.open('Please complete all fields.', 'Close', {
        duration: 3000,
        panelClass: ['error-snack-bar'],
      });
    }
  }

  // Refresh CAPTCHA manually
  refreshCaptcha() {
    this.fetchCaptcha(); // Call the CAPTCHA fetching method again
  }
}
