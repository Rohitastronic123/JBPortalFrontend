import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { ResumeBuilder2Component } from './resume-builder2/resume-builder2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ResumeUploadComponent } from './resume-upload/resume-upload.component';
import { JobSearchPopupComponent } from './job-search-popup/job-search-popup.component';

const routes: Routes = [
  // Default route
  { path: 'dashboard', component: DashboardComponent},
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'resume-builder', component: ResumeBuilderComponent },
  { path: 'app-resume', component: ResumeBuilder2Component },
  { path: 'app-job', component: JobSearchPopupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'resumeupdate', component: ResumeUploadComponent },
  // Additional routes can be added here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
