import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private TOKEN_EXPIRATION_TIME = 30 * 60 * 1000; // 30 minutes in milliseconds

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    const tokenTimestamp = localStorage.getItem('tokenTimestamp');

    if (token && tokenTimestamp) {
      const currentTime = Date.now();
      const tokenTime = parseInt(tokenTimestamp, 10);

      if (currentTime - tokenTime < this.TOKEN_EXPIRATION_TIME) {
        return true; // Token is still valid
      } else {
        // Token has expired, remove it from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('tokenTimestamp');
      }
    }

    // If not authenticated, redirect to login
    this.router.navigate(['']);
    return false;
  }
}
