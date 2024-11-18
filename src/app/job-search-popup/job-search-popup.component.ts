// job-search-popup.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-job-search-popup',
  templateUrl: './job-search-popup.component.html',
  styleUrls: ['./job-search-popup.component.scss']
})
export class JobSearchPopupComponent {
  jobTitle: string = '';
  jobResults: string[] = [];
  analysis: string = '';
  constructor(public dialogRef: MatDialogRef<JobSearchPopupComponent>) {}
  // Simulate recommendations as user types
  onInputChange(): void {
    if (this.jobTitle.trim()) {
      // Simulate job recommendations based on job title
      this.jobResults = this.generateRecommendations(this.jobTitle);

      // Generate analysis text
      this.analysis = `We found these jobs for "${this.jobTitle}":`;
    } else {
      // Clear results if input is empty
      this.jobResults = [];
      this.analysis = '';
    }
  }

  // Generate dummy job recommendations based on the job title
  generateRecommendations(jobTitle: string): string[] {
    // Dummy data based on job title
    return [
      `${jobTitle} Developer - Company A`,
      `${jobTitle} Engineer - Company B`,
      `${jobTitle} Analyst - Company C`
    ];
  }

  // Handle form submission
  onSearch(): void {
    console.log('Searching for:', this.jobTitle);
  }
  onClose(): void {
    this.dialogRef.close();
  }
}
