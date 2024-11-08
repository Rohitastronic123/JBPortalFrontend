import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
interface LoginResponse {
  message: string;
  token: string;
  user: {
    name: string;
    email: string;
    city: string;
    state: string;
    phone?: string;       // Optional, add if present in the API response
    address?: string;     // Optional, add if present in the API response
    joinedDate?: string;  // Optional, add if present in the API response
  };
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData: LoginResponse['user'] | null = null; // Holds the user's data
  loading = true; // Show a loading spinner while data is being fetched
  error: string | null = null;

  constructor(private http: HttpClient, private router: Router,
    
  ) {}

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void {
    
  

  
    const token = localStorage.getItem('token'); // Retrieve token from local storage if it exists

if (token) {
  // Include 'Bearer ' prefix as required by the backend
  const authorizationHeader = `Bearer ${token}`;

  // Make the API call with token as a query parameter
  this.http.post<LoginResponse>(`${environment.backendurl}/user?authorization=${encodeURIComponent(authorizationHeader)}`, {})
    .subscribe({
      next: (data) => {
        this.userData = data.user;
        this.loading = false;
        console.log(data);
      },
      error: (err) => {
        this.error = 'Failed to fetch user data. Please try again later.';
        this.loading = false;
        if (err.status === 401) {
          this.router.navigate(['/login']); // Redirect to login if unauthorized
        }
      }
    });
} else {
  // Handle the case where there is no token
  this.error = 'Authorization token is missing. Please log in again.';
  this.router.navigate(['/login']); // Redirect to login if unauthorized
}

  }
  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
