import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSnackBar } from '@angular/material';
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
}

interface Application {
  id: number;
  jobTitle: string;
  status: string;
}

interface Message {
  id: number;
  sender: string;
  content: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('sidenavAnimation', [
      state('open', style({ width: '350px', opacity: 1 })),
      state('closed', style({ width: '0px', opacity: 0 })),
      transition('open => closed', [
        animate('0.3s ease-in-out')
      ]),
      transition('closed => open', [
        animate('0.3s ease-in-out')
      ]),
    ])
  ]
})
export class DashboardComponent implements OnInit {
  userName: string | null = '';
  jobs: Job[] = []; // Mock data for jobs
  applications: Application[] = []; // Mock data for applications
  messages: Message[] = []; // Mock data for messages
  
  // Add the isSidebarOpen property to control sidebar visibility
  isSidebarOpen: boolean = false; 
  isLoggedIn: boolean=true;


  constructor(private router: Router,private snackBar: MatSnackBar) {}

  displayedColumns: string[] = ['jobTitle', 'status', 'actions'];

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.loadJobs();
    this.loadApplications();
    this.loadMessages();
  }

  loadJobs() {
    this.jobs = [
      { id: 1, title: 'Frontend Developer', company: 'TechCorp', location: 'New York' },
      { id: 2, title: 'Backend Developer', company: 'Innovatech', location: 'San Francisco' }
    ];
  }

  loadApplications() {
    this.applications = [
      { id: 1, jobTitle: 'Frontend Developer', status: 'Interview Scheduled' },
      { id: 2, jobTitle: 'Backend Developer', status: 'Applied' }
    ];
  }

  loadMessages() {
    this.messages = [
      { id: 1, sender: 'HR - TechCorp', content: 'We are pleased to invite you to an interview.' },
      { id: 2, sender: 'Innovatech', content: 'Your application has been received.' }
    ];
  }
  logout(): void {
    localStorage.removeItem('token'); // Remove token
    localStorage.removeItem('userName'); // Remove token
    localStorage.removeItem('tokenTimestamp'); // Remove token
    this.isLoggedIn = false; // Update login state
    this.router.navigate(['/']); // Optionally navigate to home or login page
       // Show success popup message
       this.snackBar.open('Logout successful!', 'Close', {
        duration: 3000, // Duration in milliseconds
        panelClass: ['success-snack-bar'], // Optional: add custom styles
      });

  }
  goToProfile() {
    // Navigate to profile page
  }

  applyToJob(jobId: number) {
    // Handle job application logic
  }

  viewApplication(applicationId: number) {
    // Handle viewing application details
  }

  viewMessage(messageId: number) {
    // Handle viewing message
  }

  // Method to toggle the sidebar visibility
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
