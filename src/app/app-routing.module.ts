import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { ResumeBuilder2Component } from './resume-builder2/resume-builder2.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'resume-builder', component: ResumeBuilderComponent },
  { path: 'app-resume-builder2', component: ResumeBuilder2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
