import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // To make HTTP requests

@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.scss']
})
export class ResumeUploadComponent implements OnInit {
  resumeForm: FormGroup;
  resumeUploaded: boolean = false;  // Flag to show form only after resume upload
  selectedFileName: string = '';  // To show selected file name

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.resumeForm = this.fb.group({
      name: [''],
      jobTitle: [''],
      contactNo: [''],
      email: [''],
      address: [''],
      socialProfile: [''],
      professionalSummary: [''],
      // Add more form controls for sections like experiences, skills, etc.
    });
  }

  ngOnInit(): void {}

  // Handle file input click
  onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name; // Set the selected file name to display
      this.fileUpload(event); // Trigger file upload logic
    }
  }

  // File upload handler
  fileUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      
      // Send the file to the Python backend
      this.http.post<any>('http://localhost:5000/upload_resume', formData).subscribe(
        (response) => {
          // Populate the form with the extracted data
          console.log(response)
          this.resumeForm.patchValue(response);
          this.resumeUploaded = true;  // Set flag to true after successful upload and parse
        },
        (error) => {
          console.error('Error uploading resume:', error);
        }
      );
    }
  }

  // Save the current form data into the resume object
  saveResume() {
    // Your save logic, like generating PDF or storing the resume
    console.log('Resume data saved:', this.resumeForm.value);
  }

  // Handle form submission and resume generation
  onGenerateResume() {
    this.saveResume();
    // Call the function to generate PDF or display the updated resume
    console.log('Resume generated:', this.resumeForm.value);
  }
}
