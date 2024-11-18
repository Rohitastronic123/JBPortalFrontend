import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatCheckboxModule, MatDialogModule, MatProgressSpinnerModule, MatSpinner, MatTableModule, MatToolbarModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from './carousel/carousel.component';
import { JBCardComponent } from './jbcard/jbcard.component';
import { MatCardModule } from '@angular/material/card';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { MatSliderModule } from '@angular/material/slider';
import { ResumeBuilder2Component } from './resume-builder2/resume-builder2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ProfileComponent } from './profile/profile.component';
import { ResumeUploadComponent } from './resume-upload/resume-upload.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { JobSearchPopupComponent } from './job-search-popup/job-search-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CarouselComponent,
    JBCardComponent,
    ResumeBuilderComponent,
    ResumeBuilder2Component,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    ResumeUploadComponent,
    JobSearchPopupComponent,
      ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
     // Required for ngx-toastr animations
     MatTableModule,
     MatSnackBarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule, // Required for Angular Material animations
    MatToolbarModule,         // Add MatToolbarModule here
    MatDialogModule           // Add MatDialogModule for dialogs
    ,MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatSliderModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
