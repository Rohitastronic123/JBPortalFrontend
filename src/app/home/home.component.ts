import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false; // Track login state
  constructor(public dialog: MatDialog,
    private router: Router, private snackBar: MatSnackBar
  ) {}
  isMenuOpen = false;
   a ="\assets\images\cross.png";
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  scrollProgress: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (scrollTop / docHeight) * 100;
  }
   // Listens for click events on the window
   @HostListener('document:click', ['$event'])
   handleClick(event: MouseEvent) {
     // Check if the click is outside the menu
     const targetElement = event.target as HTMLElement;
     const menuButton = document.querySelector('.menu-button') as HTMLElement;
 
     if (this.isMenuOpen && menuButton && !menuButton.contains(targetElement)) {
       this.isMenuOpen = false; // Close the menu if clicked outside
     }
   }
   openLoginDialog(): void {
    if (!this.isLoggedIn) {
      // Open the login dialog only if not logged in
      this.dialog.open(LoginComponent, {
        width: '400px',
        height: 'auto',
        disableClose: false,
      }).afterClosed().subscribe(result => {
        
        this.checkLoginStatus();
      });
    }
  }
  logout(): void {
    localStorage.removeItem('token'); // Remove token
    localStorage.removeItem('userName'); // Remove token
    this.isLoggedIn = false; // Update login state
    this.router.navigate(['/']); // Optionally navigate to home or login page
       // Show success popup message
       this.snackBar.open('Logout successful!', 'Close', {
        duration: 3000, // Duration in milliseconds
        panelClass: ['success-snack-bar'], // Optional: add custom styles
      });

  }
  openSignupDialog() {
    this.dialog.open(SignupComponent ,{
      width: '500px', // Width of the dialog
      height: 'auto', // Automatic height adjustment
      disableClose: false, // Prevent closing on outside click (optional)
    
    });
  }

  ngOnInit() {
    this.checkLoginStatus(); 
  }
  checkLoginStatus(): void {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token; // Set to true if token exists
  }
  scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollToContact() {
    const aboutSection = document.getElementById('contact');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
