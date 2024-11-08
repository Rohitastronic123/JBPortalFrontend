import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName: string | null = '';
  jobs: Job[] = []; // Mock data for jobs
  applications: Application[] = []; // Mock data for applications
  messages: Message[] = []; // Mock data for messages
  constructor(private router: Router) {}
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
    // Fetch jobs from backend or mock data
    this.jobs = [
      { id: 1, title: 'Frontend Developer', company: 'TechCorp', location: 'New York' },
      { id: 2, title: 'Backend Developer', company: 'Innovatech', location: 'San Francisco' }
      // Add more jobs as needed
    ];
  }

  loadApplications() {
    // Fetch applications from backend or mock data
    this.applications = [
      { id: 1, jobTitle: 'Frontend Developer', status: 'Interview Scheduled' },
      { id: 2, jobTitle: 'Backend Developer', status: 'Applied' }
    ];
  }

  loadMessages() {
    // Fetch messages from backend or mock data
    this.messages = [
      { id: 1, sender: 'HR - TechCorp', content: 'We are pleased to invite you to an interview.' },
      { id: 2, sender: 'Innovatech', content: 'Your application has been received.' }
    ];
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
}
