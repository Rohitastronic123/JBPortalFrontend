import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { env } from 'process';
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
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  token="";
  loginForm: FormGroup;



  ngOnInit() {
   
  }

  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router,private dialogRef: MatDialogRef<LoginComponent>, private snackBar: MatSnackBar) {
    // Initialize the form with validation
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email validation
      password: ['', [Validators.required]] // Password validation
    });
  }

  onLogin() {
    console.log('Login method called'); // Debug log
    if (this.loginForm.valid) {
      const formData = this.loginForm.value; // Get form data
      console.log('Login Data:', formData); // Log data to console
  
      // Create headers and add Authorization if needed
      let headers = new HttpHeaders();
      const token = localStorage.getItem('token'); // Retrieve token from local storage if it exists
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`); // Set Authorization header with 'Bearer'
      }
  
      // Call the login API
      this.http.post<LoginResponse>(`${env.backendurl}/login`, formData, { headers, observe: 'response' })
        .pipe(
          catchError(error => {
            console.error('Login error', error);
            return throwError(error); // Handle the error as needed
          })
        )
        .subscribe(response => {
          console.log('Login successful:', response);
          
          // Get the new token from the response body
          const newToken = response.body.token; 
          const userName = response.body.user.name; // Get user's name from response
          if (newToken) {
            // Store the token in local storage
            localStorage.setItem('token', newToken);
            localStorage.setItem('userName', userName); // Save user name
            localStorage.setItem('tokenTimestamp', Date.now().toString());
            console.log('Token stored in local storage:', newToken);
          }
          
          // Show success popup message
          this.snackBar.open('Login successful!', 'Close', {
            duration: 3000, // Duration in milliseconds
            panelClass: ['success-snack-bar'], // Optional: add custom styles
          });
  
          this.dialogRef.close();
          // Handle successful login response (e.g., navigate to dashboard)
          this.router.navigate(['/dashboard']);
          
        });
    } else {
      console.log('Form is invalid');
    }
  }
  

}