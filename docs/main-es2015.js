(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExample\" class=\"carousel slide\" data-bs-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"./assets/images/job1.jpg\" class=\"d-block w-100\" style=\"height: 400px;\" alt=\"Slide 1\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"./assets/images/19721.jpg\" class=\"d-block w-100\" style=\"height: 400px;\" alt=\"Slide 2\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"./assets/images/job2.jpg\" class=\"d-block w-100\" style=\"height: 400px;\" alt=\"Slide 3\">\n      </div>\n      <!-- <div class=\"carousel-item\">\n        <img src=\"../../assets/images/jobs1.jpg\" class=\"d-block w-100\" style=\"height: 400px;\" alt=\"Slide 3\">\n      </div> -->\n    </div>\n    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExample\" data-bs-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"visually-hidden\">Previous</span>\n    </button>\n    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExample\" data-bs-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"visually-hidden\">Next</span>\n    </button>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"custom-toolbar\">\n  <span class=\"logo\">\n    <img src=\"./assets/images/logo.gif\" alt=\"\" />\n  </span>\n\n  <span class=\"spacer\"></span>\n\n  <!-- For larger screens, display buttons directly -->\n  <div class=\"desktop-nav\">\n    <button mat-button class=\"nav-button\" routerLink=\"/about\">About</button>\n    <button mat-button class=\"nav-button\" routerLink=\"/contact\">Contact</button>\n    <button mat-button class=\"nav-button\" (click)=\"openLoginDialog()\">Login</button>\n    <button mat-button class=\"nav-button\" (click)=\"openSignupDialog()\">Signup</button>\n  </div>\n\n  <!-- Menu button for mobile -->\n  <span mat-button [matMenuTriggerFor]=\"menu\" class=\"menu-button\" (click)=\"toggleMenu()\">\n    <img [src]=\"isMenuOpen ? './assets/images/cross.png' : './assets/images/menu.png'\" \n         style=\"width: 30px; height: 30px;\" \n         [@fadeInOut]>\n  </span>\n  \n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/about\">About</button>\n    <button mat-menu-item routerLink=\"/contact\">Contact</button>\n    <button mat-menu-item (click)=\"openLoginDialog()\">Login</button>\n    <button mat-menu-item (click)=\"openSignupDialog()\">Signup</button>\n  </mat-menu>\n</mat-toolbar>\n<app-carousel></app-carousel>\n<app-jbcard></app-jbcard>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jbcard/jbcard.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jbcard/jbcard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-container\">\n    <mat-card *ngFor=\"let card of cards\" class=\"example-card\" @fadeIn>\n        <img mat-card-image [src]=\"card.image\" style=\"aspect-ratio: 3/2;\" alt=\"{{ card.title }}\" />\n      <mat-card-header>\n        <div mat-card-avatar class=\"card-avatar\"></div>\n        <mat-card-title>{{ card.title }}</mat-card-title>\n        <mat-card-subtitle>{{ card.subtitle }}</mat-card-subtitle>\n      </mat-card-header>\n    \n      <mat-card-content>\n        <p>{{ card.description }}</p>\n      </mat-card-content>\n      <mat-card-actions>\n        \n        <button mat-button color=\"primary\" (click)=\"goToLink(card.link)\" >Go to</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Login</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n    <mat-form-field>\n      <mat-label>Email</mat-label>\n      <input matInput type=\"email\" formControlName=\"email\">\n      <mat-error *ngIf=\"loginForm.get('email')?.hasError('required')\">Email is required.</mat-error>\n      <mat-error *ngIf=\"loginForm.get('email')?.hasError('email')\">Please enter a valid email.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Password</mat-label>\n      <input matInput type=\"password\" formControlName=\"password\">\n      <mat-error *ngIf=\"loginForm.get('password')?.hasError('required')\">Password is required.</mat-error>\n    </mat-form-field>\n  </form>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button type=\"submit\" (click)=\"onLogin()\" [disabled]=\"loginForm.invalid\">Login</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/resume-builder/resume-builder.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resume-builder/resume-builder.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resume-builder\" [formGroup]=\"resumeForm\">\n  <h2>Resume Builder</h2>\n\n  <!-- Basic Information Form -->\n  <div class=\"form-section\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Full Name</mat-label>\n      <input matInput formControlName=\"name\" />\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Email</mat-label>\n      <input matInput formControlName=\"email\" />\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Phone Number</mat-label>\n      <input matInput formControlName=\"phone\" />\n    </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n      <mat-label>Address </mat-label>\n      <input matInput formControlName=\"address\" />\n    </mat-form-field>\n  </div>\n\n  <hr />\n\n  <!-- Section Selection with Checkboxes -->\n  <div>\n    <h3>Select Sections to Include</h3>\n    <mat-checkbox *ngFor=\"let section of sections\" (change)=\"onSectionToggle(section)\">\n      {{ section }}\n    </mat-checkbox>\n  </div>\n\n  <!-- Form Fields for Selected Sections -->\n  <div *ngFor=\"let section of sections\">\n    <div *ngIf=\"selectedSections[section]\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>{{ section }}</mat-label>\n        <textarea matInput [formControlName]=\"section\"></textarea>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <!-- Actions -->\n  <button mat-raised-button color=\"primary\" (click)=\"togglePreview()\">Preview Resume</button>\n  <button mat-raised-button color=\"accent\" (click)=\"downloadPDF()\">Download as PDF</button>\n\n  <!-- Resume Preview Section -->\n  <div class=\"resume-preview\" id=\"resumePreview\" *ngIf=\"showPreview\">\n    <h2>{{ resumeForm.get('name')?.value }}</h2>\n    <p>{{ resumeForm.get('email')?.value }}</p>\n    <p>{{ resumeForm.get('phone')?.value }}</p>\n    <p>{{ resumeForm.get('address')?.value }}</p>\n\n    <hr />\n\n    <div *ngFor=\"let section of sections\">\n      <div *ngIf=\"selectedSections[section]\">\n        <h3>{{ section }}</h3>\n        <p>{{ resumeForm.get(section)?.value }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/resume-builder2/resume-builder2.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resume-builder2/resume-builder2.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-primary d-flex justify-content-between\">\n  <div class=\"navbar-brand mb-0 h1 text-white\">ONLINE RESUME BUILDER</div>\n</nav>\n<div class=\"container-fluid\">\n  <form #resumeForm=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <!-- Personal Details -->\n        <div class=\"shadow-sm card mb-4\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title d-flex align-items-center\">\n              <i class=\"material-icons\">account_circle</i> Personal Details\n            </h4>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.name\" name=\"name\" placeholder=\"Name\"\n                    #Name=\"ngModel\" required [ngClass]=\"{'is-invalid': Name.invalid && (Name.touched || resumeForm.submitted) }\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.jobTitle\" name=\"jobTitle\"\n                    placeholder=\"Job Title\" #JobTitle=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': JobTitle.invalid && (JobTitle.touched || resumeForm.submitted) }\">\n                </div>\n                <div class=\"form-group\">\n                  <textarea class=\"form-control\" [(ngModel)]=\"resume.address\" name=\"address\" rows=\"3\"\n                    placeholder=\"Address\" #Address=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': Address.invalid && (Address.touched || resumeForm.submitted) }\"></textarea>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.contactNo\" name=\"contactNo\"\n                    placeholder=\"Contact No.\" #ContactNo=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': ContactNo.invalid && (ContactNo.touched || resumeForm.submitted) }\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"email\" class=\"form-control\" [(ngModel)]=\"resume.email\" name=\"emailId\"\n                    placeholder=\"Email ID\" #Email=\"ngModel\" required\n                    [ngClass]=\"{'is-invalid': Email.invalid && (Email.touched || resumeForm.submitted) }\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resume.socialProfile\" name=\"socialProfile\"\n                    placeholder=\"Social Profile\">\n                </div>\n              </div>\n            </div>\n            <!-- Professional Summary Section -->\n            <div class=\"form-group\">\n              <textarea class=\"form-control\" [(ngModel)]=\"resume.professionalSummary\" name=\"professionalSummary\"\n                rows=\"4\" placeholder=\"Professional Summary\" required></textarea>\n            </div>\n          </div>\n        </div>\n\n        <!-- Skills Section -->\n        <div class=\"shadow-sm card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title d-flex align-items-center\">\n              <i class=\"material-icons\">timeline</i>Skills\n              <button class=\"btn btn-primary ml-auto\" (click)=\"addSkill()\">+</button>\n            </h4>\n            <div class=\"row\">\n              <div class=\"col-md-4\" *ngFor=\"let s of resume.skills; let i = index\">\n                <div class=\"\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"s.value\" name=\"skill{{i}}\"\n                    placeholder=\"e.g., Java, Angular\" required>\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-danger\" (click)=\"removeSkill(i)\">-</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n\n        <!-- Experience Section -->\n      <!-- Experience Section -->\n<div class=\"shadow-sm card\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title d-flex align-items-center\">\n      <i class=\"material-icons\">work</i>Experience\n      <button class=\"btn btn-primary ml-auto\" (click)=\"addExperience()\">+</button>\n    </h4>\n    <div class=\"row\" *ngFor=\"let ex of resume.experiences; let i = index\">\n      <div class=\"col-md-6\">\n        <input type=\"text\" class=\"form-control mb-2\" [(ngModel)]=\"ex.employer\" name=\"employer{{i}}\"\n          placeholder=\"Employer\" required>\n        <textarea class=\"form-control\" [(ngModel)]=\"ex.jobDescription\" name=\"jobDescription{{i}}\"\n          rows=\"3\" placeholder=\"Job Description\"></textarea>\n      </div>\n      <div class=\"col-md-6\">\n        <input type=\"text\" class=\"form-control mb-2\" [(ngModel)]=\"ex.jobTitle\" name=\"jobTitle{{i}}\"\n          placeholder=\"Job Title\" required>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ex.experience\" name=\"experience{{i}}\"\n          placeholder=\"Experience in months\" required>\n      </div>\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-danger\" (click)=\"removeExperience(i)\">Remove</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Education Section -->\n<div class=\"shadow-sm card\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title d-flex align-items-center\">\n      <i class=\"material-icons\">school</i>Education\n      <button class=\"btn btn-primary ml-auto\" (click)=\"addEducation()\">+</button>\n    </h4>\n    <div class=\"row\" *ngFor=\"let ed of resume.educations; let i = index\">\n      <div class=\"col-md-3\">\n        <select class=\"form-control\" [(ngModel)]=\"ed.degree\" name=\"degree{{i}}\" required>\n          <option [value]=\"d\" *ngFor=\"let d of degrees\">{{d}}</option>\n        </select>\n      </div>\n      <div class=\"col-md-3\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ed.college\" name=\"college{{i}}\"\n          placeholder=\"School/College\" required>\n      </div>\n      <div class=\"col-md-3\">\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ed.passingYear\" name=\"passingYear{{i}}\"\n          placeholder=\"Passing Year\" required>\n      </div>\n      <div class=\"col-md-3\">\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"ed.percentage\" name=\"percentage{{i}}\"\n          placeholder=\"Percentage\" required>\n      </div>\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-danger\" (click)=\"removeEducation(i)\">Remove</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Certificates Section -->\n<div class=\"shadow-sm card\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title d-flex align-items-center\">\n      <i class=\"material-icons\">verified</i>Certificates\n      <button class=\"btn btn-primary ml-auto\" (click)=\"addCertificate()\">+</button>\n    </h4>\n    <div class=\"row\" *ngFor=\"let cert of resume.certificates; let i = index\">\n      <div class=\"col-md-4\">\n        <input type=\"text\" class=\"form-control mb-2\" [(ngModel)]=\"cert.name\" name=\"certificateName{{i}}\"\n          placeholder=\"Certificate Name\" required>\n      </div>\n      <div class=\"col-md-4\">\n        <input type=\"text\" class=\"form-control mb-2\" [(ngModel)]=\"cert.issuer\" name=\"certificateIssuer{{i}}\"\n          placeholder=\"Issuer\" required>\n      </div>\n      <div class=\"col-md-4\">\n        <input type=\"text\" class=\"form-control mb-2\" [(ngModel)]=\"cert.issueDate\" name=\"certificateIssueDate{{i}}\"\n          placeholder=\"Issue Date (DD-MM-YYYY)\" required>\n      </div>\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-danger\" (click)=\"removeCertificate(i)\">Remove</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n        \n        <!-- Other Details Section -->\n        <div class=\"shadow-sm card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title d-flex align-items-center\">\n              <i class=\"material-icons\">list</i>Other Details\n            </h4>\n            <textarea class=\"form-control\" [(ngModel)]=\"resume.otherDetails\" name=\"otherDetails\" rows=\"4\"></textarea>\n          </div>\n        </div>\n        <div class=\"shadow-sm card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title d-flex align-items-center\">\n              <i class=\"material-icons\">code</i>Projects\n              <button class=\"btn btn-primary ml-auto\" (click)=\"addProject()\">+</button>\n            </h4>\n            <div class=\"row\" *ngFor=\"let project of resume.projects; let i = index\">\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control mb-2\" [(ngModel)]=\"project.title\" name=\"projectTitle{{i}}\"\n                  placeholder=\"Project Title\" required>\n                <textarea class=\"form-control\" [(ngModel)]=\"project.description\" name=\"projectDescription{{i}}\"\n                  rows=\"3\" placeholder=\"Project Description\"></textarea>\n              </div>\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control mb-2\" [(ngModel)]=\"project.technologies\" name=\"projectTechnologies{{i}}\"\n                  placeholder=\"Technologies Used\" required>\n              </div>\n              <div class=\"col-md-12\">\n                <button class=\"btn btn-danger\" (click)=\"removeProject(i)\">Remove</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n     \n      \n      <!-- Right Column: PDF Controls & Image -->\n      <div class=\"col-md-4\">\n        <div class=\"shadow-sm card action-buttons\">\n          <button (click)=\"resumeForm.valid ? generatePdf('open') : ''\" class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n            <i class=\"material-icons\">picture_as_pdf</i> <span>Open PDF</span>\n          </button>\n          <button (click)=\"resumeForm.valid ? generatePdf('download') : ''\" class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n            <i class=\"material-icons\">cloud_download</i><span>Download PDF</span>\n          </button>\n          <button (click)=\"resumeForm.valid ? generatePdf('print') : ''\" class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n            <i class=\"material-icons\">print</i><span>Print PDF</span>\n          </button>\n          <button type='reset' (click)=\"resetForm()\" class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n            <i class=\"material-icons\">clear</i><span>Reset</span>\n          </button>\n        </div>\n        <div class=\"card p-4\">\n          <label class=\"h4 mb-3\">Show your picture in Resume</label>\n          <input type=\"file\" class=\"form-control-file\" (change)=\"fileChanged($event)\">\n          <img *ngIf=\"resume.profilePic\" [src]=\"resume.profilePic\" class=\"img-fluid mt-3 profile-pic \" alt=\"Profile Picture\">\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h2 mat-dialog-title>Signup</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"signupForm\" (ngSubmit)=\"submitForm()\">\n    <div class=\"form-field\">\n      <mat-form-field class=\"full-width\">\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"name\" required>\n        <mat-error *ngIf=\"signupForm.get('name')?.hasError('required')\">Name is required.</mat-error>\n      </mat-form-field>\n    </div>\n\n    <mat-form-field class=\"full-width\" >\n      <mat-label >State</mat-label>\n      <mat-select formControlName=\"state\" (selectionChange)=\"onStateChange($event.value)\">\n        <mat-option *ngFor=\"let state of states\" [value]=\"state.state\">{{ state.state }}</mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"signupForm.get('state')?.hasError('required')\">State is required.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <mat-label>City</mat-label>\n      <mat-select formControlName=\"city\" required>\n        <mat-option *ngFor=\"let city of cities\" [value]=\"city\">{{ city }}</mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"signupForm.get('city')?.hasError('required')\">City is required.</mat-error>\n    </mat-form-field>\n\n    <div class=\"form-field\">\n      <mat-form-field class=\"full-width\">\n        <mat-label>Email</mat-label>\n        <input matInput formControlName=\"email\" type=\"email\" required>\n        <mat-error *ngIf=\"signupForm.get('email')?.hasError('required')\">Email is required.</mat-error>\n        <mat-error *ngIf=\"signupForm.get('email')?.hasError('email')\">Please enter a valid email.</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-field\">\n      <mat-form-field class=\"full-width\" >\n        <mat-label>Password</mat-label>\n        <input matInput formControlName=\"password\" type=\"password\" required>\n        <mat-error *ngIf=\"signupForm.get('password')?.hasError('required')\">Password is required.</mat-error>\n      </mat-form-field>\n    </div>\n\n    <mat-dialog-actions>\n      <button mat-button mat-dialog-close>Cancel</button>\n      <button mat-button type=\"submit\" [disabled]=\"!signupForm.valid\">Signup</button>\n    </mat-dialog-actions>\n  </form>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _resume_builder_resume_builder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume-builder/resume-builder.component */ "./src/app/resume-builder/resume-builder.component.ts");
/* harmony import */ var _resume_builder2_resume_builder2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume-builder2/resume-builder2.component */ "./src/app/resume-builder2/resume-builder2.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'resume-builder', component: _resume_builder_resume_builder_component__WEBPACK_IMPORTED_MODULE_6__["ResumeBuilderComponent"] },
    { path: 'app-resume-builder2', component: _resume_builder2_resume_builder2_component__WEBPACK_IMPORTED_MODULE_7__["ResumeBuilder2Component"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'JBPortalFrontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _jbcard_jbcard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./jbcard/jbcard.component */ "./src/app/jbcard/jbcard.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _resume_builder_resume_builder_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./resume-builder/resume-builder.component */ "./src/app/resume-builder/resume-builder.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _resume_builder2_resume_builder2_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./resume-builder2/resume-builder2.component */ "./src/app/resume-builder2/resume-builder2.component.ts");



























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
            _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__["CarouselComponent"],
            _jbcard_jbcard_component__WEBPACK_IMPORTED_MODULE_21__["JBCardComponent"],
            _resume_builder_resume_builder_component__WEBPACK_IMPORTED_MODULE_23__["ResumeBuilderComponent"],
            _resume_builder2_resume_builder2_component__WEBPACK_IMPORTED_MODULE_25__["ResumeBuilder2Component"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"] // Add MatDialogModule for dialogs
            ,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/carousel/carousel.component.scss":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-inner img {\n  width: 100%;\n  height: auto;\n  /* Adjust height as needed */\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  background-color: black;\n  /* Optional: customize control colors */\n}\n\n.carousel-image {\n  width: 100%;\n  aspect-ratio: 16/9;\n}\n\n@media (max-width: 992px) {\n  .carousel-image {\n    aspect-ratio: 4/3;\n  }\n}\n\n@media (max-width: 576px) {\n  .carousel-image {\n    aspect-ratio: 1/1;\n  }\n}\n\n/* Optional: Adjust carousel controls for better mobile view */\n\n.carousel-control-prev,\n.carousel-control-next {\n  width: 5%;\n}\n\n#carouselExample {\n  margin-top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvRDpcXEpCUG9ydGFsXFxKQkZyb250ZW5kXFxKQlBvcnRhbEZyb250ZW5kL3NyY1xcYXBwXFxjYXJvdXNlbFxcY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFBYyw0QkFBQTtBQ0VsQjs7QURDRTs7RUFFRSx1QkFBQTtFQUF5Qix1Q0FBQTtBQ0c3Qjs7QURERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZJO0VBSkY7SUFLSSxpQkFBQTtFQ0tKO0FBQ0Y7O0FESEk7RUFSRjtJQVNJLGlCQUFBO0VDTUo7QUFDRjs7QURIRSw4REFBQTs7QUFDQTs7RUFFRSxTQUFBO0FDTUo7O0FESkU7RUFDRSxlQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pbm5lciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87IC8qIEFkanVzdCBoZWlnaHQgYXMgbmVlZGVkICovXHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcclxuICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IC8qIE9wdGlvbmFsOiBjdXN0b21pemUgY29udHJvbCBjb2xvcnMgKi9cclxuICB9XHJcbiAgLmNhcm91c2VsLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7IC8vIFRoaXMgc2V0cyBhIDE2OjkgYXNwZWN0IHJhdGlvIGZvciB0aGUgaW1hZ2VzXHJcbiAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHsgLy8gVGFibGV0IHNjcmVlbnNcclxuICAgICAgYXNwZWN0LXJhdGlvOiA0IC8gMzsgLy8gQ2hhbmdlIGFzcGVjdCByYXRpbyBmb3IgdGFibGV0c1xyXG4gICAgfVxyXG4gIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7IC8vIE1vYmlsZSBzY3JlZW5zXHJcbiAgICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7IC8vIENoYW5nZSBhc3BlY3QgcmF0aW8gdG8gc3F1YXJlIGZvciBtb2JpbGUgc2NyZWVuc1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBPcHRpb25hbDogQWRqdXN0IGNhcm91c2VsIGNvbnRyb2xzIGZvciBiZXR0ZXIgbW9iaWxlIHZpZXcgKi9cclxuICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxyXG4gIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gICAgd2lkdGg6IDUlO1xyXG4gIH1cclxuICAjY2Fyb3VzZWxFeGFtcGxle1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIH0iLCIuY2Fyb3VzZWwtaW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgLyogQWRqdXN0IGhlaWdodCBhcyBuZWVkZWQgKi9cbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLFxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC8qIE9wdGlvbmFsOiBjdXN0b21pemUgY29udHJvbCBjb2xvcnMgKi9cbn1cblxuLmNhcm91c2VsLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMTYvOTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2Fyb3VzZWwtaW1hZ2Uge1xuICAgIGFzcGVjdC1yYXRpbzogNC8zO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNhcm91c2VsLWltYWdlIHtcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgfVxufVxuXG4vKiBPcHRpb25hbDogQWRqdXN0IGNhcm91c2VsIGNvbnRyb2xzIGZvciBiZXR0ZXIgbW9iaWxlIHZpZXcgKi9cbi5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgd2lkdGg6IDUlO1xufVxuXG4jY2Fyb3VzZWxFeGFtcGxlIHtcbiAgbWFyZ2luLXRvcDogMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html"),
        styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/carousel/carousel.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CarouselComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-toolbar {\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n}\n.custom-toolbar .logo img {\n  height: 60px;\n  width: 80px;\n  border-radius: 5px;\n}\n.custom-toolbar .spacer {\n  flex: 1 1 auto;\n}\n.custom-toolbar .menu-button {\n  display: none;\n}\n.custom-toolbar .desktop-nav {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n}\n.custom-toolbar .desktop-nav > .nav-button {\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .custom-toolbar .desktop-nav {\n    display: none;\n  }\n  .custom-toolbar .menu-button {\n    display: block;\n  }\n}\n::ng-deep .mat-toolbar.mat-primary {\n  background-color: #0047AB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcSkJQb3J0YWxcXEpCRnJvbnRlbmRcXEpCUG9ydGFsRnJvbnRlbmQvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDRjtBREVJO0VBRUMsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RMO0FES0U7RUFDRSxjQUFBO0FDSEo7QURNRTtFQUNFLGFBQUE7QUNKSjtBRE9FO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQ0xKO0FEUUk7RUFDRSxjQUFBO0FDTk47QURVRTtFQUNFO0lBQ0UsYUFBQTtFQ1JKO0VEV0U7SUFDRSxjQUFBO0VDVEo7QUFDRjtBRFlBO0VBQ0EseUJBQUE7QUNUQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tdG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgaW1nIHtcclxuICAgICAgXHJcbiAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87IC8vIFRha2UgdXAgcmVtYWluaW5nIHNwYWNlXHJcbiAgfVxyXG5cclxuICAubWVudS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLy8gSGlkZSBvbiBsYXJnZXIgc2NyZWVuc1xyXG4gIH1cclxuXHJcbiAgLmRlc2t0b3AtbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IC8vIFNob3cgbmF2aWdhdGlvbiBpdGVtc1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgLy8gQWxpZ24gYnV0dG9ucyB0byB0aGUgcmlnaHRcclxuICAgIGdhcDogMTZweDsgLy8gT3B0aW9uYWw6IEFkZCBzcGFjZSBiZXR3ZWVuIGJ1dHRvbnNcclxuXHJcbiAgICAvLyBDZW50ZXIgdGhlIHJvdXRlciBsaW5rc1xyXG4gICAgJiA+IC5uYXYtYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87IC8vIENlbnRlciB0aGUgYnV0dG9ucyBpbiB0aGUgc3BhY2UgdGhleSBvY2N1cHlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmRlc2t0b3AtbmF2IHtcclxuICAgICAgZGlzcGxheTogbm9uZTsgLy8gSGlkZSBuYXZpZ2F0aW9uIGl0ZW1zIG9uIG1vYmlsZVxyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBTaG93IG1lbnUgYnV0dG9uIG9uIG1vYmlsZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG46Om5nLWRlZXAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5e1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDA0N0FCO1xyXG59IiwiLmN1c3RvbS10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLmN1c3RvbS10b29sYmFyIC5sb2dvIGltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jdXN0b20tdG9vbGJhciAuc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uY3VzdG9tLXRvb2xiYXIgLm1lbnUtYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jdXN0b20tdG9vbGJhciAuZGVza3RvcC1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDE2cHg7XG59XG4uY3VzdG9tLXRvb2xiYXIgLmRlc2t0b3AtbmF2ID4gLm5hdi1idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY3VzdG9tLXRvb2xiYXIgLmRlc2t0b3AtbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jdXN0b20tdG9vbGJhciAubWVudS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbjo6bmctZGVlcCAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0N0FCO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");






let HomeComponent = class HomeComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.isMenuOpen = false;
        this.a = "\assets\images\cross.png";
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    // Listens for click events on the window
    handleClick(event) {
        // Check if the click is outside the menu
        const targetElement = event.target;
        const menuButton = document.querySelector('.menu-button');
        if (this.isMenuOpen && menuButton && !menuButton.contains(targetElement)) {
            this.isMenuOpen = false; // Close the menu if clicked outside
        }
    }
    openLoginDialog() {
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], {
            width: '400px',
            height: 'auto',
            disableClose: true,
        });
    }
    openSignupDialog() {
        this.dialog.open(_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], {
            width: '500px',
            height: 'auto',
            disableClose: true,
        });
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HomeComponent.prototype, "handleClick", null);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fadeInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 })),
                ]),
            ]),
        ],
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/jbcard/jbcard.component.scss":
/*!**********************************************!*\
  !*** ./src/app/jbcard/jbcard.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n}\n\n.example-card {\n  width: 300px;\n  margin: 8px;\n  display: flex;\n  background-color: #0096FF;\n  flex-direction: column;\n  transition: box-shadow 0.3s ease, -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, -webkit-transform 0.3s ease;\n}\n\n.example-card:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);\n}\n\nmat-card {\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\nmat-card-content {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvamJjYXJkL0Q6XFxKQlBvcnRhbFxcSkJGcm9udGVuZFxcSkJQb3J0YWxGcm9udGVuZC9zcmNcXGFwcFxcamJjYXJkXFxqYmNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2piY2FyZC9qYmNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZEQUFBO0VBQUEscURBQUE7RUFBQSxrRkFBQTtBQ0NGOztBRENFO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO0FDQ0o7O0FER0E7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvamJjYXJkL2piY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NkZGO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLy8gU2xpZ2h0bHkgc2NhbGUgdXAgb24gaG92ZXJcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8vIFN0cm9uZ2VyIHNoYWRvdyBvbiBob3ZlclxyXG4gIH1cclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxubWF0LWNhcmQtY29udGVudHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZGRjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG59XG4uZXhhbXBsZS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxubWF0LWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/jbcard/jbcard.component.ts":
/*!********************************************!*\
  !*** ./src/app/jbcard/jbcard.component.ts ***!
  \********************************************/
/*! exports provided: JBCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JBCardComponent", function() { return JBCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let JBCardComponent = class JBCardComponent {
    constructor() {
        this.cards = [
            {
                title: 'Build Your Resume',
                subtitle: 'Improve your skill',
                description: 'Best time to create future.',
                image: './assets/images/resume.jpg',
                link: '/app-resume-builder2'
            },
            {
                title: 'Card Title 2',
                subtitle: 'Subtitle 2',
                description: 'This is a description for Card 2.',
                image: './assets/images/findjob.jpg',
                link: 'https://example.com/page2'
            },
            {
                title: 'Card Title 3',
                subtitle: 'Subtitle 3',
                description: 'This is a description for Card 3.',
                image: './assets/images/interview.jpg',
                link: 'https://example.com/page3'
            }
        ];
    }
    ngOnInit() {
    }
    goToLink(url) {
        window.open(url, '_blank');
    }
};
JBCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-jbcard',
        template: __webpack_require__(/*! raw-loader!./jbcard.component.html */ "./node_modules/raw-loader/index.js!./src/app/jbcard/jbcard.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(20px)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0)' }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./jbcard.component.scss */ "./src/app/jbcard/jbcard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], JBCardComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-dialog-container {\n  background: #5795ec;\n  color: #000000;\n}\n\n:host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n:host mat-dialog-content {\n  width: 100%;\n  padding: 16px;\n  -webkit-animation: fadeIn 0.3s ease-in-out;\n          animation: fadeIn 0.3s ease-in-out;\n}\n\n:host mat-dialog-content form {\n  display: flex;\n  flex-direction: column;\n}\n\n:host mat-dialog-content form mat-form-field {\n  margin-bottom: 16px;\n  width: 100%;\n}\n\n:host mat-dialog-content form mat-form-field mat-label {\n  font-weight: bold;\n}\n\n:host mat-dialog-actions {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n:host mat-dialog-actions button {\n  flex: 1;\n  margin: 0 8px;\n}\n\n:host mat-dialog-actions button:hover {\n  background-color: #007bff;\n  transition: background-color 0.3s ease;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXEpCUG9ydGFsXFxKQkZyb250ZW5kXFxKQlBvcnRhbEZyb250ZW5kL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUUsbUJBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FER0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNETjs7QURHTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0RSOztBREdRO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDRFY7O0FER1U7RUFDRSxpQkFBQTtBQ0RaOztBRE9JO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0xOOztBRE9NO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUNMUjs7QURPUTtFQUNFLHlCQUFBO0VBQ0Esc0NBQUE7QUNMVjs7QURZRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNUSjtFRFdFO0lBQ0UsVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUNUSjtBQUNGOztBRENFO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ1RKO0VEV0U7SUFDRSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFQ1RKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxvZ2luLWRpYWxvZy5jb21wb25lbnQuc2Nzc1xyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBcclxuICBiYWNrZ3JvdW5kOiAjNTc5NWVjOyBcclxuICBjb2xvcjogIzAwMDAwMDsgXHJcbiAgXHJcbn1cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMTAwJTsgLy8gRnVsbCB3aWR0aCBmb3IgcmVzcG9uc2l2ZW5lc3NcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLWluLW91dDsgLy8gQW5pbWF0aW9uIGVmZmVjdCBvbiBvcGVuXHJcbiAgXHJcbiAgICAgIGZvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBcclxuICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4OyAvLyBTcGFjaW5nIGJldHdlZW4gZmllbGRzXHJcbiAgICAgICAgICB3aWR0aDogMTAwJTsgLy8gRnVsbCB3aWR0aCBmb3IgZmllbGRzXHJcbiAgXHJcbiAgICAgICAgICBtYXQtbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgLy8gRW1waGFzaXplIGxhYmVsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBtYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlOyAvLyBGdWxsIHdpZHRoIGZvciBidXR0b25zXHJcbiAgXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZmxleDogMTsgLy8gRXF1YWwgd2lkdGggZm9yIGJ1dHRvbnNcclxuICAgICAgICBtYXJnaW46IDAgOHB4OyAvLyBNYXJnaW4gYmV0d2VlbiBidXR0b25zXHJcbiAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyAvLyBMaWdodCBob3ZlciBlZmZlY3RcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlOyAvLyBTbW9vdGggdHJhbnNpdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBBbmltYXRpb24ga2V5ZnJhbWVzXHJcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICM1Nzk1ZWM7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCBtYXQtZGlhbG9nLWNvbnRlbnQgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCBtYXQtZGlhbG9nLWNvbnRlbnQgZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWF0LWRpYWxvZy1jb250ZW50IGZvcm0gbWF0LWZvcm0tZmllbGQgbWF0LWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46aG9zdCBtYXQtZGlhbG9nLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWF0LWRpYWxvZy1hY3Rpb25zIGJ1dHRvbiB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMCA4cHg7XG59XG46aG9zdCBtYXQtZGlhbG9nLWFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let LoginComponent = class LoginComponent {
    constructor(fb) {
        this.fb = fb;
        // Initialize the form with validation
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]] // Password validation
        });
    }
    ngOnInit() {
    }
    onLogin() {
        console.log('Login method called'); // Debug log
        if (this.loginForm.valid) {
            const formData = this.loginForm.value; // Get form data
            console.log('Login Data:', formData); // Log data to console
            // Here you can handle the login logic (e.g., API call)
        }
        else {
            console.log('Form is invalid');
            console.log('Form Errors:', this.loginForm.errors); // Log errors if needed
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/resume-builder/resume-builder.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/resume-builder/resume-builder.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resume-builder {\n  max-width: 600px;\n  margin: 20px auto;\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background-color: #5795ec;\n  color: white;\n}\n.resume-builder mat-form-field {\n  width: 100%;\n  margin: 8px 0;\n}\n.resume-builder .mat-checkbox {\n  margin-right: 10px;\n}\n.resume-builder mat-slider {\n  width: 100%;\n  margin-top: 10px;\n}\n.resume-builder button {\n  margin-top: 20px;\n}\nmat-label {\n  color: white;\n}\n.resume-preview {\n  font-family: Arial, sans-serif;\n  max-width: 600px;\n  margin: 20px auto;\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n}\n.resume-preview h2 {\n  font-size: 24px;\n  color: #333;\n}\n.resume-preview p {\n  font-size: 14px;\n  color: #555;\n}\n.resume-preview h3 {\n  font-size: 18px;\n  color: #333;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lLWJ1aWxkZXIvRDpcXEpCUG9ydGFsXFxKQkZyb250ZW5kXFxKQlBvcnRhbEZyb250ZW5kL3NyY1xcYXBwXFxyZXN1bWUtYnVpbGRlclxccmVzdW1lLWJ1aWxkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS1idWlsZGVyL3Jlc3VtZS1idWlsZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDRUo7QURDRTtFQUNFLGtCQUFBO0FDQ0o7QURFRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0U7RUFDRSxnQkFBQTtBQ0RKO0FESUE7RUFDRSxZQUFBO0FDREY7QURHQTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQUY7QURHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQUY7QURHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1idWlsZGVyL3Jlc3VtZS1idWlsZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VtZS1idWlsZGVyIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3OTVlYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jaGVja2JveCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBtYXQtc2xpZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG5tYXQtbGFiZWx7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yZXN1bWUtcHJldmlldyB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnJlc3VtZS1wcmV2aWV3IGgyIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5yZXN1bWUtcHJldmlldyBwIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi5yZXN1bWUtcHJldmlldyBoMyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuIiwiLnJlc3VtZS1idWlsZGVyIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3OTVlYztcbiAgY29sb3I6IHdoaXRlO1xufVxuLnJlc3VtZS1idWlsZGVyIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogOHB4IDA7XG59XG4ucmVzdW1lLWJ1aWxkZXIgLm1hdC1jaGVja2JveCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5yZXN1bWUtYnVpbGRlciBtYXQtc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucmVzdW1lLWJ1aWxkZXIgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxubWF0LWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVzdW1lLXByZXZpZXcge1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5yZXN1bWUtcHJldmlldyBoMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5yZXN1bWUtcHJldmlldyBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzU1NTtcbn1cblxuLnJlc3VtZS1wcmV2aWV3IGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/resume-builder/resume-builder.component.ts":
/*!************************************************************!*\
  !*** ./src/app/resume-builder/resume-builder.component.ts ***!
  \************************************************************/
/*! exports provided: ResumeBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeBuilderComponent", function() { return ResumeBuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");




let ResumeBuilderComponent = class ResumeBuilderComponent {
    constructor(fb) {
        this.fb = fb;
        this.sections = ['About Me', 'Work Experience', 'Education', 'Skills', 'References'];
        this.selectedSections = {};
        this.showPreview = false;
        this.resumeForm = this.fb.group({
            name: [''],
            email: [''],
            phone: [''],
            address: [''],
            'About Me': [''],
            'Work Experience': [''],
            'Education': [''],
            'Skills': [''],
            'References': [''],
        });
    }
    onSectionToggle(section) {
        this.selectedSections[section] = !this.selectedSections[section];
    }
    togglePreview() {
        this.showPreview = !this.showPreview;
    }
    downloadPDF() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3__["default"]('p', 'pt', 'a4');
            const content = document.getElementById('resumePreview');
            if (content) {
                yield pdf.html(content, {
                    callback: (pdf) => {
                        pdf.save('Resume.pdf');
                    },
                    x: 10,
                    y: 10,
                    margin: [10, 10, 10, 10],
                    html2canvas: {
                        scale: window.devicePixelRatio || 1,
                        useCORS: true // Allows cross-origin images if you are using any
                    }
                });
            }
        });
    }
};
ResumeBuilderComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ResumeBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume-builder',
        template: __webpack_require__(/*! raw-loader!./resume-builder.component.html */ "./node_modules/raw-loader/index.js!./src/app/resume-builder/resume-builder.component.html"),
        styles: [__webpack_require__(/*! ./resume-builder.component.scss */ "./src/app/resume-builder/resume-builder.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], ResumeBuilderComponent);



/***/ }),

/***/ "./src/app/resume-builder2/resume-builder2.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/resume-builder2/resume-builder2.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #f8f9fa;\n}\n\n.navbar {\n  padding: 1rem;\n  background-color: #007bff;\n}\n\n.navbar .navbar-brand {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.container-fluid {\n  padding: 2rem;\n}\n\n.container-fluid .row {\n  margin-bottom: 1.5rem;\n}\n\n.card {\n  border-radius: 0.25rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  margin-bottom: 1.5rem;\n}\n\n.card h4.card-title {\n  display: flex;\n  align-items: center;\n  font-size: 1.25rem;\n  color: #007bff;\n}\n\n.card h4.card-title i {\n  margin-right: 0.5rem;\n}\n\n.card h4.card-title button {\n  margin-left: auto;\n  background-color: #007bff;\n  color: white;\n}\n\n.card h4.card-title button:hover {\n  background-color: #0062cc;\n}\n\n.card .card-body {\n  padding: 1.5rem;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-group input,\n.form-group textarea {\n  border-radius: 0.25rem;\n  transition: border-color all 0.3s ease;\n}\n\n.form-group input:focus,\n.form-group textarea:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.form-group .is-invalid {\n  border-color: red;\n}\n\n.form-group .is-invalid:focus {\n  border-color: darkred;\n}\n\n.btn {\n  border-radius: 0.25rem;\n  transition: background-color all 0.3s ease;\n}\n\n.btn.btn-primary {\n  background-color: #007bff;\n  color: white;\n}\n\n.btn.btn-primary:hover {\n  background-color: #0062cc;\n}\n\n.btn.btn-danger {\n  background-color: #dc3545;\n  color: white;\n}\n\n.btn.btn-danger:hover {\n  background-color: #bd2130;\n}\n\n.profile-pic {\n  max-width: 100%;\n  height: auto;\n  border-radius: 0.25rem;\n  border: 2px solid #007bff;\n}\n\n@media (max-width: 768px) {\n  .row {\n    flex-direction: column;\n  }\n\n  .col-md-8,\n.col-md-4 {\n    width: 100%;\n  }\n}\n\n.action-buttons button {\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lLWJ1aWxkZXIyL0Q6XFxKQlBvcnRhbFxcSkJGcm9udGVuZFxcSkJQb3J0YWxGcm9udGVuZC9zcmNcXGFwcFxccmVzdW1lLWJ1aWxkZXIyXFxyZXN1bWUtYnVpbGRlcjIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS1idWlsZGVyMi9yZXN1bWUtYnVpbGRlcjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxpQ0FBQTtFQUNBLHlCQUFBO0FDTEY7O0FEU0E7RUFDRSxhQUFBO0VBQ0EseUJBYmM7QUNPaEI7O0FEUUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDTko7O0FEV0E7RUFDRSxhQUFBO0FDUkY7O0FEVUU7RUFDRSxxQkFBQTtBQ1JKOztBRGFBO0VBQ0Usc0JBOUJjO0VBK0JkLHdDQWhDWTtFQWlDWixzQkFBQTtFQUNBLHFCQUFBO0FDVkY7O0FEWUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBekNZO0FDK0JoQjs7QURZSTtFQUNFLG9CQUFBO0FDVk47O0FEYUk7RUFDRSxpQkFBQTtFQUNBLHlCQWpEVTtFQWtEVixZQUFBO0FDWE47O0FEYU07RUFDRSx5QkFBQTtBQ1hSOztBRGdCRTtFQUNFLGVBQUE7QUNkSjs7QURtQkE7RUFDRSxtQkFBQTtBQ2hCRjs7QURrQkU7O0VBRUUsc0JBbkVZO0VBb0VaLHNDQUFBO0FDaEJKOztBRGlCSTs7RUFDRSxxQkF4RVU7RUF5RVYsZ0RBQUE7QUNkTjs7QURrQkU7RUFDRSxpQkFBQTtBQ2hCSjs7QURrQkk7RUFDRSxxQkFBQTtBQ2hCTjs7QURzQkE7RUFDRSxzQkF0RmM7RUF1RmQsMENBQUE7QUNuQkY7O0FEb0JFO0VBQ0UseUJBM0ZZO0VBNEZaLFlBQUE7QUNsQko7O0FEb0JJO0VBQ0UseUJBQUE7QUNsQk47O0FEc0JFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDcEJKOztBRHNCSTtFQUNFLHlCQUFBO0FDcEJOOztBRDBCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBL0djO0VBZ0hkLHlCQUFBO0FDdkJGOztBRDJCQTtFQUNFO0lBQ0Usc0JBQUE7RUN4QkY7O0VEMkJBOztJQUVFLFdBQUE7RUN4QkY7QUFDRjs7QUQ2QkU7RUFDRSxxQkFBQTtBQzNCSiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1idWlsZGVyMi9yZXN1bWUtYnVpbGRlcjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBWYXJpYWJsZXNcclxuJHByaW1hcnktY29sb3I6ICMwMDdiZmY7XHJcbiRjYXJkLXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuJGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi8vIE5hdmJhciBzdHlsaW5nXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcblxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi8vIENvbnRhaW5lclxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG5cclxuICAucm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENhcmQgc3R5bGVzXHJcbi5jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBib3gtc2hhZG93OiAkY2FyZC1zaGFkb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblxyXG4gIGg0LmNhcmQtdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGb3JtIHN0eWxlc1xyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgaW5wdXQsXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgJHRyYW5zaXRpb247XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoJHByaW1hcnktY29sb3IsIDAuMjUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlzLWludmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogZGFya3JlZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEJ1dHRvbiBzdHlsZXNcclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAkdHJhbnNpdGlvbjtcclxuICAmLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmJ0bi1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCNkYzM1NDUsIDEwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBQcm9maWxlIFBpY3R1cmUgc3R5bGVzXHJcbi5wcm9maWxlLXBpYyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tZC04LFxyXG4gIC5jb2wtbWQtNCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1pc2NlbGxhbmVvdXMgc3R5bGVzXHJcbi5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB9XHJcbn1cclxuIiwiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4ubmF2YmFyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4uY29udGFpbmVyLWZsdWlkIC5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLmNhcmQgaDQuY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4uY2FyZCBoNC5jYXJkLXRpdGxlIGkge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5jYXJkIGg0LmNhcmQtdGl0bGUgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYXJkIGg0LmNhcmQtdGl0bGUgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjJjYztcbn1cbi5jYXJkIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5mb3JtLWdyb3VwIGlucHV0LFxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgYWxsIDAuM3MgZWFzZTtcbn1cbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzLFxuLmZvcm0tZ3JvdXAgdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbn1cbi5mb3JtLWdyb3VwIC5pcy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG4uZm9ybS1ncm91cCAuaXMtaW52YWxpZDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogZGFya3JlZDtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgYWxsIDAuM3MgZWFzZTtcbn1cbi5idG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYnRuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjJjYztcbn1cbi5idG4uYnRuLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5idG4uYnRuLWRhbmdlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7XG59XG5cbi5wcm9maWxlLXBpYyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA3YmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5jb2wtbWQtOCxcbi5jb2wtbWQtNCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5hY3Rpb24tYnV0dG9ucyBidXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/resume-builder2/resume-builder2.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/resume-builder2/resume-builder2.component.ts ***!
  \**************************************************************/
/*! exports provided: ResumeBuilder2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeBuilder2Component", function() { return ResumeBuilder2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _resume__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume */ "./src/app/resume-builder2/resume.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);





pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default.a.pdfMake.vfs;
let ResumeBuilder2Component = class ResumeBuilder2Component {
    constructor() {
        this.resume = new _resume__WEBPACK_IMPORTED_MODULE_2__["Resume"]();
        this.degrees = ['B.E.', 'M.E.', 'B.Com', 'M.Com'];
        this.resume = JSON.parse(sessionStorage.getItem('resume')) || new _resume__WEBPACK_IMPORTED_MODULE_2__["Resume"]();
        this.initializeResume();
    }
    ngOnInit() { }
    initializeResume() {
        if (!this.resume.experiences || this.resume.experiences.length === 0) {
            this.resume.experiences = [new _resume__WEBPACK_IMPORTED_MODULE_2__["Experience"]()];
        }
        if (!this.resume.educations || this.resume.educations.length === 0) {
            this.resume.educations = [new _resume__WEBPACK_IMPORTED_MODULE_2__["Education"]()];
        }
        if (!this.resume.skills || this.resume.skills.length === 0) {
            this.resume.skills = [new _resume__WEBPACK_IMPORTED_MODULE_2__["Skill"]()];
        }
        if (!this.resume.certificates || this.resume.certificates.length === 0) {
            this.resume.certificates = [new _resume__WEBPACK_IMPORTED_MODULE_2__["Certificate"]()];
        }
        if (!this.resume.projects || this.resume.projects.length === 0) {
            this.resume.projects = [new _resume__WEBPACK_IMPORTED_MODULE_2__["Projects"]()];
        }
    }
    addExperience() {
        this.resume.experiences.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Experience"]());
    }
    addEducation() {
        this.resume.educations.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Education"]());
    }
    addCertificate() {
        this.resume.certificates.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Certificate"]());
    }
    addSkill() {
        this.resume.skills.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Skill"]());
    }
    removeSkill(index) {
        this.resume.skills.splice(index, 1);
    }
    removeExperience(index) {
        this.resume.experiences.splice(index, 1);
    }
    removeEducation(index) {
        this.resume.educations.splice(index, 1);
    }
    removeCertificate(index) {
        this.resume.certificates.splice(index, 1);
    }
    addProject() {
        this.resume.projects.push(new _resume__WEBPACK_IMPORTED_MODULE_2__["Projects"]());
    }
    removeProject(index) {
        this.resume.projects.splice(index, 1);
    }
    generatePdf(action = 'open') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const documentDefinition = yield this.getDocumentDefinition();
            switch (action) {
                case 'open':
                    pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.createPdf(documentDefinition).open();
                    break;
                case 'print':
                    pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.createPdf(documentDefinition).print();
                    break;
                case 'download':
                    pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.createPdf(documentDefinition).download();
                    break;
                default:
                    pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.createPdf(documentDefinition).open();
                    break;
            }
        });
    }
    fileChanged(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.resume.profilePic = e.target.result; // Store the base64 image string
            };
            reader.readAsDataURL(file);
        }
    }
    resetForm() {
        this.resume = new _resume__WEBPACK_IMPORTED_MODULE_2__["Resume"]();
    }
    getDocumentDefinition() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            sessionStorage.setItem('resume', JSON.stringify(this.resume));
            let circularImage = null;
            if (this.resume.profilePic) {
                circularImage = yield this.createCircularImage(this.resume.profilePic, 50); // Reduced image size
            }
            return {
                content: [
                    this.createHeaderSection(),
                    this.createContactSection(circularImage),
                    this.createLineSeparator(),
                    this.createProfessionalSummarySection(),
                    this.createLineSeparator(),
                    this.createSkillsSection(),
                    this.createLineSeparator(),
                    this.createProfessionalExperienceSection(),
                    this.createLineSeparator(),
                    this.createProjectsSection(),
                    this.createLineSeparator(),
                    this.createEducationSection(),
                    this.createLineSeparator(),
                    this.createCertificationsSection(),
                ],
                styles: this.getStyles(),
                defaultStyle: this.getDefaultStyle(),
            };
        });
    }
    createHeaderSection() {
        return {
            stack: [
                { text: this.resume.name || 'Full Name', style: 'headerName' },
                { text: this.resume.jobTitle || 'Job Title', style: 'headerJobTitle' },
            ],
            alignment: 'center',
            margin: [0, 0, 0, 0]
        };
    }
    createContactSection(circularImage) {
        return {
            columns: [
                {
                    stack: [
                        { text: `Phone: ${this.resume.contactNo || ''}`, style: 'contactInfo' },
                        { text: `Email: ${this.resume.email || ''}`, style: 'contactInfo' },
                        { text: `Address: ${this.resume.address || ''}`, style: 'contactInfo' },
                        { text: `LinkedIn: ${this.resume.socialProfile || ''}`, style: 'contactInfo' }
                    ],
                },
                circularImage ? {
                    image: circularImage,
                    width: 50,
                    height: 50,
                    alignment: 'right',
                    margin: [0, 0, 0, 5],
                } : {}
            ],
            columnGap: 5,
            margin: [0, 0, 0, 5]
        };
    }
    createProfessionalSummarySection() {
        return {
            stack: [
                { text: 'Professional Summary', style: 'sectionHeader' },
                { text: this.resume.professionalSummary || 'Brief description of professional background and key skills.', style: 'summary', margin: [0, 0, 0, 10] },
            ],
        };
    }
    createSkillsSection() {
        const skills = this.resume.skills || [];
        return {
            stack: [
                { text: 'Skills', style: 'sectionHeader' },
                {
                    table: {
                        widths: Array(skills.length).fill('*'),
                        body: [
                            [
                                ...skills.slice(0, 5).map(skill => ({
                                    text: `• ${skill.value || 'Skill'}`,
                                    style: 'listItem'
                                }))
                            ]
                        ]
                    },
                    layout: 'noBorders',
                    margin: [0, 0, 0, 5]
                },
            ],
        };
    }
    createProfessionalExperienceSection() {
        const experiences = this.resume.experiences || [];
        return {
            stack: [
                { text: 'Professional Experience', style: 'sectionHeader' },
                {
                    table: {
                        widths: ['*', '*', '*', '60%'],
                        body: [
                            [
                                { text: 'Job Title', style: 'tableHeader' },
                                { text: 'Employer', style: 'tableHeader' },
                                { text: 'Duration', style: 'tableHeader' },
                                { text: 'Description', style: 'tableHeader' }
                            ],
                            ...(experiences.length > 0 ?
                                experiences.slice(0, 2).map(exp => [
                                    { text: exp.jobTitle || 'Job Title', style: 'listItem' },
                                    { text: exp.employer || 'Employer Name', style: 'listItem' },
                                    { text: `${exp.experience || '0'} months`, style: 'listItem' },
                                    { text: exp.jobDescription || 'Key responsibilities and achievements.', style: 'listItem', margin: [0, 0, 0, 0] } // Adjust margin as needed
                                ]) : [
                                [
                                    { text: 'No experience available', colSpan: 4, style: 'listItem' },
                                    {}, {}, {} // Fill remaining cells to maintain structure
                                ]
                            ])
                        ]
                    },
                    layout: 'noBorders',
                    margin: [0, 0, 0, 5]
                },
            ],
        };
    }
    createProjectsSection() {
        return {
            stack: [
                { text: 'Projects', style: 'sectionHeader' },
                {
                    table: {
                        widths: ['*', '*', '70%'],
                        body: [
                            [
                                { text: 'Project Title', style: 'tableHeader' },
                                { text: 'Technologies', style: 'tableHeader' },
                                { text: 'Description', style: 'tableHeader' },
                            ],
                            ...(this.resume.projects || []).slice(0, 3).map(project => [
                                { text: project.title || 'Project Title', style: 'listItem' },
                                { text: project.technologies || 'Project Technologies', style: 'listItem' },
                                { text: project.description || 'Project Description', style: 'listItem' },
                            ])
                        ]
                    },
                    layout: 'noBorders',
                    margin: [0, 0, 0, 5]
                },
            ],
        };
    }
    createEducationSection() {
        return {
            stack: [
                { text: 'Education', style: 'sectionHeader' },
                {
                    table: {
                        widths: ['*', '*', '*', '*'],
                        body: [
                            [
                                { text: 'Degree', style: 'tableHeader' },
                                { text: 'School/College', style: 'tableHeader' },
                                { text: 'Year', style: 'tableHeader' },
                                { text: 'GPA/Percentage', style: 'tableHeader' }
                            ],
                            ...(this.resume.educations || []).slice(0, 2).map(edu => [
                                { text: edu.degree || 'Degree Name', style: 'listItem' },
                                { text: edu.college || 'College/University Name', style: 'listItem' },
                                { text: edu.passingYear || 'Year of Passing', style: 'listItem' },
                                { text: edu.percentage || 'N/A', style: 'listItem' }
                            ])
                        ]
                    },
                    layout: 'noBorders',
                    margin: [0, 0, 0, 5]
                },
            ],
        };
    }
    createCertificationsSection() {
        return {
            stack: [
                { text: 'Certifications', style: 'sectionHeader' },
                {
                    table: {
                        widths: ['*', '*', '*'],
                        body: [
                            [
                                { text: 'Title', style: 'tableHeader' },
                                { text: 'Issuer', style: 'tableHeader' },
                                { text: 'Issue Date', style: 'tableHeader' }
                            ],
                            ...(this.resume.certificates || []).slice(0, 2).map(cert => [
                                { text: cert.name || 'Certification Title', style: 'listItem' },
                                { text: cert.issuer || 'Issuer Name', style: 'listItem' },
                                { text: cert.issueDate || 'Date', style: 'listItem' }
                            ])
                        ]
                    },
                    layout: 'noBorders',
                    margin: [0, 0, 0, 5]
                },
            ],
        };
    }
    createLineSeparator() {
        return { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 520, y2: 0, lineWidth: 0.5, color: '#999' }], margin: [0, 1, 0, 1] };
    }
    getStyles() {
        return {
            header: { fontSize: 26, bold: true, margin: [0, 0, 0, 0] },
            headerName: { fontSize: 22, bold: true },
            headerJobTitle: { fontSize: 16, italics: true },
            contactInfo: { fontSize: 10, margin: [0, 2] },
            sectionHeader: { fontSize: 16, bold: true, margin: [0, 8, 0, 2] },
            summary: { fontSize: 10 },
            bulletList: { fontSize: 10, margin: [0, 2] },
            listItem: { fontSize: 10, margin: [0, 2] },
            tableHeader: { bold: true, fontSize: 11, color: 'black' }
        };
    }
    getDefaultStyle() {
        return {
            fontSize: 12,
            columnGap: 10,
        };
    }
    createCircularImage(imageSrc, size) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const img = new Image();
            img.src = imageSrc;
            return new Promise((resolve) => {
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.width = size;
                    canvas.height = size;
                    context.beginPath();
                    context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
                    context.closePath();
                    context.clip();
                    context.drawImage(img, 0, 0, size, size);
                    resolve(canvas.toDataURL());
                };
            });
        });
    }
};
ResumeBuilder2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume-builder2',
        template: __webpack_require__(/*! raw-loader!./resume-builder2.component.html */ "./node_modules/raw-loader/index.js!./src/app/resume-builder2/resume-builder2.component.html"),
        styles: [__webpack_require__(/*! ./resume-builder2.component.scss */ "./src/app/resume-builder2/resume-builder2.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ResumeBuilder2Component);



/***/ }),

/***/ "./src/app/resume-builder2/resume.ts":
/*!*******************************************!*\
  !*** ./src/app/resume-builder2/resume.ts ***!
  \*******************************************/
/*! exports provided: Resume, Experience, Education, Skill, Certificate, Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume", function() { return Resume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experience", function() { return Experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Certificate", function() { return Certificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
class Resume {
    constructor() {
        this.experiences = [];
        this.educations = [];
        this.skills = [];
        this.certificates = []; // Keep this for the certificates
        this.projects = [];
        this.experiences.push(new Experience());
        this.educations.push(new Education());
        this.skills.push(new Skill());
        this.certificates.push(new Certificate());
        this.projects.push(new Projects());
    }
}
class Experience {
}
class Education {
}
class Skill {
}
class Certificate {
}
class Projects {
}


/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* General Styles */\n.full-width {\n  width: 100%;\n}\n::ng-deep .mat-dialog-container {\n  background: #5795ec;\n  color: #000000;\n}\n.mat-form-field {\n  margin-bottom: 20px;\n}\n/* Responsive Design */\n@media (max-width: 600px) {\n  .mat-form-field {\n    margin-bottom: 15px;\n  }\n}\n/* Dialog Header */\nh2 {\n  text-align: center;\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n  color: #000000;\n}\n/* Form Field Styles */\n.form-field {\n  display: flex;\n  flex-direction: column;\n}\n/* Error Messages */\n.mat-error {\n  font-size: 0.875rem;\n  color: #d50000;\n}\n/* Buttons */\nmat-dialog-actions {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\nmat-dialog-actions button {\n  flex: 1;\n  margin: 0 10px;\n  min-width: 120px;\n  color: #000000;\n}\nmat-dialog-actions button:hover {\n  background-color: #007bff;\n  color: white;\n  transition: background-color 0.2s ease-in-out;\n}\n/* Animations for Form Fields */\n.mat-form-field {\n  transition: all 0.2s ease-in-out;\n}\n.mat-form-field:focus-within {\n  border-color: #0077c8;\n}\n.mat-form-field .mat-input-element {\n  color: #000000;\n}\n.mat-form-field .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6);\n}\n/* Scrollbar Styles */\nmat-dialog-content {\n  max-height: 400px;\n  overflow-y: auto;\n  background: #5795ec;\n  color: #000000;\n  padding: 16px;\n  /* Custom scrollbar */\n  /* Firefox scrollbar styling */\n  scrollbar-color: #0077c8 #f1f1f1;\n  scrollbar-width: thin;\n  border-radius: 10px;\n}\nmat-dialog-content ::-webkit-scrollbar {\n  width: 8px;\n}\nmat-dialog-content ::-webkit-scrollbar-track {\n  background-color: #f1f1f1;\n  border-radius: 10px;\n}\nmat-dialog-content ::-webkit-scrollbar-thumb {\n  background-color: #0077c8;\n  border-radius: 10px;\n}\nmat-dialog-content ::-webkit-scrollbar-thumb:hover {\n  background-color: #005ea1;\n}\nmat-label {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0Q6XFxKQlBvcnRhbFxcSkJGcm9udGVuZFxcSkJQb3J0YWxGcm9udGVuZC9zcmNcXGFwcFxcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQUE7QUFDQTtFQUNFLFdBQUE7QUNDRjtBRENBO0VBRUUsbUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQSxzQkFBQTtBQUNBO0VBQ0U7SUFDRSxtQkFBQTtFQ0NGO0FBQ0Y7QURFQSxrQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FGO0FER0Esc0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0FGO0FER0EsbUJBQUE7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0FGO0FER0EsWUFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVFO0VBQ0UsT0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBSjtBREVJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7QUNBTjtBREtBLCtCQUFBO0FBQ0E7RUFDRSxnQ0FBQTtBQ0ZGO0FESUU7RUFDRSxxQkFBQTtBQ0ZKO0FES0U7RUFDRSxjQUFBO0FDSEo7QURNRTtFQUNFLHlCQUFBO0FDSko7QURRQSxxQkFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFFQSxxQkFBQTtFQW1CQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ3hCRjtBREdFO0VBQ0UsVUFBQTtBQ0RKO0FESUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDRko7QURLRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE1FO0VBQ0UseUJBQUE7QUNKSjtBRFlBO0VBQ0UsWUFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYWwgU3R5bGVzICovXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBcclxuICBiYWNrZ3JvdW5kOiAjNTc5NWVjOyBcclxuICBjb2xvcjogIzAwMDAwMDsgXHJcbiAgXHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvLyBTcGFjZSBiZXR3ZWVuIGZvcm0gZmllbGRzXHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAvLyBSZWR1Y2VkIHNwYWNpbmcgZm9yIHNtYWxsZXIgc2NyZWVuc1xyXG4gIH1cclxufVxyXG5cclxuLyogRGlhbG9nIEhlYWRlciAqL1xyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7IC8vIEhlYWRlciB0ZXh0IGNvbG9yXHJcbn1cclxuXHJcbi8qIEZvcm0gRmllbGQgU3R5bGVzICovXHJcbi5mb3JtLWZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8vIFN0YWNrIGxhYmVscyBhbmQgaW5wdXRzIHZlcnRpY2FsbHlcclxufVxyXG5cclxuLyogRXJyb3IgTWVzc2FnZXMgKi9cclxuLm1hdC1lcnJvciB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTsgLy8gU2xpZ2h0bHkgc21hbGxlciBmb250IGZvciBlcnJvciBtZXNzYWdlc1xyXG4gIGNvbG9yOiAjZDUwMDAwOyAvLyBFcnJvciBjb2xvclxyXG59XHJcblxyXG4vKiBCdXR0b25zICovXHJcbm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMjBweDsgLy8gU3BhY2UgYWJvdmUgYnV0dG9uc1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbjogMCAxMHB4OyAvLyBTcGFjZSBiZXR3ZWVuIGJ1dHRvbnNcclxuICAgIG1pbi13aWR0aDogMTIwcHg7IC8vIE1pbmltdW0gYnV0dG9uIHdpZHRoXHJcbiAgICBjb2xvcjogIzAwMDAwMDsgLy8gQnV0dG9uIHRleHQgY29sb3JcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgLy8gQnV0dG9uIGJhY2tncm91bmQgb24gaG92ZXJcclxuICAgICAgY29sb3I6IHdoaXRlOyAvLyBCdXR0b24gdGV4dCBjb2xvciBvbiBob3ZlclxyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7IC8vIFNtb290aCB0cmFuc2l0aW9uXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBbmltYXRpb25zIGZvciBGb3JtIEZpZWxkcyAqL1xyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDc3Yzg7IC8vIENoYW5nZSBib3JkZXIgY29sb3Igb24gZm9jdXNcclxuICB9XHJcblxyXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDsgLy8gSW5wdXQgdGV4dCBjb2xvclxyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7IC8vIExhYmVsIGNvbG9yXHJcbiAgfVxyXG59XHJcblxyXG4vKiBTY3JvbGxiYXIgU3R5bGVzICovXHJcbm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7IC8vIEFkanVzdCBmb3IgY29udGVudCBoZWlnaHQgYXMgbmVlZGVkXHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjNTc5NWVjOyAvLyBEaWFsb2cgYmFja2dyb3VuZCBjb2xvclxyXG4gIGNvbG9yOiAjMDAwMDAwOyAvLyBEaWFsb2cgdGV4dCBjb2xvclxyXG4gIHBhZGRpbmc6IDE2cHg7IC8vIFBhZGRpbmcgZm9yIGRpYWxvZyBjb250ZW50XHJcblxyXG4gIC8qIEN1c3RvbSBzY3JvbGxiYXIgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7IC8vIFdpZHRoIG9mIHNjcm9sbGJhclxyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxOyAvLyBUcmFjayBjb2xvclxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdjODsgLy8gVGh1bWIgY29sb3JcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVlYTE7IC8vIEhvdmVyIGNvbG9yIGZvciB0aHVtYlxyXG4gIH1cclxuXHJcbiAgLyogRmlyZWZveCBzY3JvbGxiYXIgc3R5bGluZyAqL1xyXG4gIHNjcm9sbGJhci1jb2xvcjogIzAwNzdjOCAjZjFmMWYxO1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbm1hdC1sYWJlbHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn0iLCIvKiBHZW5lcmFsIFN0eWxlcyAqL1xuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICM1Nzk1ZWM7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuLyogRGlhbG9nIEhlYWRlciAqL1xuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLyogRm9ybSBGaWVsZCBTdHlsZXMgKi9cbi5mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogRXJyb3IgTWVzc2FnZXMgKi9cbi5tYXQtZXJyb3Ige1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogI2Q1MDAwMDtcbn1cblxuLyogQnV0dG9ucyAqL1xubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxubWF0LWRpYWxvZy1hY3Rpb25zIGJ1dHRvbiB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbm1hdC1kaWFsb2ctYWN0aW9ucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLyogQW5pbWF0aW9ucyBmb3IgRm9ybSBGaWVsZHMgKi9cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLm1hdC1mb3JtLWZpZWxkOmZvY3VzLXdpdGhpbiB7XG4gIGJvcmRlci1jb2xvcjogIzAwNzdjODtcbn1cbi5tYXQtZm9ybS1maWVsZCAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4vKiBTY3JvbGxiYXIgU3R5bGVzICovXG5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZDogIzU3OTVlYztcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIC8qIEN1c3RvbSBzY3JvbGxiYXIgKi9cbiAgLyogRmlyZWZveCBzY3JvbGxiYXIgc3R5bGluZyAqL1xuICBzY3JvbGxiYXItY29sb3I6ICMwMDc3YzggI2YxZjFmMTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxubWF0LWRpYWxvZy1jb250ZW50IDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xufVxubWF0LWRpYWxvZy1jb250ZW50IDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxubWF0LWRpYWxvZy1jb250ZW50IDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2M4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxubWF0LWRpYWxvZy1jb250ZW50IDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZWExO1xufVxuXG5tYXQtbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _state_city_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state-city.model */ "./src/app/state-city.model.ts");




let SignupComponent = class SignupComponent {
    constructor(fb) {
        this.fb = fb;
        this.states = _state_city_model__WEBPACK_IMPORTED_MODULE_3__["INDIAN_STATES"]; // All states with cities
        this.cities = []; // Cities based on selected state
        this.signupForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() { }
    onStateChange(selectedState) {
        console.log('State changed:', selectedState);
        const state = this.states.find(s => s.state === selectedState);
        this.cities = state ? state.cities : [];
        this.signupForm.get('city').reset(); // Reset city field
    }
    submitForm() {
        console.log('submitForm called'); // Check if method is executed
        if (this.signupForm.valid) {
            console.log('Form Data:', this.signupForm.value); // Log the entire form data
        }
        else {
            console.log('Form is invalid');
        }
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/state-city.model.ts":
/*!*************************************!*\
  !*** ./src/app/state-city.model.ts ***!
  \*************************************/
/*! exports provided: INDIAN_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDIAN_STATES", function() { return INDIAN_STATES; });
// state-city.model.ts
// Example of all states in India with corresponding cities
const INDIAN_STATES = [
    { state: 'Andhra Pradesh', cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore'] },
    { state: 'Arunachal Pradesh', cities: ['Itanagar', 'Pasighat', 'Naharlagun', 'Tezpur', 'Ziro'] },
    { state: 'Assam', cities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Nagaon', 'Tezpur'] },
    { state: 'Bihar', cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga'] },
    { state: 'Chhattisgarh', cities: ['Raipur', 'Bilaspur', 'Durg', 'Bhilai', 'Korba'] },
    { state: 'Goa', cities: ['Panaji', 'Margao', 'Vasco da Gama', 'Ponda', 'Mapusa'] },
    { state: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'] },
    { state: 'Haryana', cities: ['Gurugram', 'Faridabad', 'Ambala', 'Hisar', 'Panchkula'] },
    { state: 'Himachal Pradesh', cities: ['Shimla', 'Dharamshala', 'Manali', 'Kullu', 'Solan'] },
    { state: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar'] },
    { state: 'Karnataka', cities: ['Bengaluru', 'Mysuru', 'Mangalore', 'Hubli', 'Dharwad'] },
    { state: 'Kerala', cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Kottayam', 'Malappuram'] },
    { state: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Gwalior', 'Ujjain', 'Sagar'] },
    { state: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane'] },
    { state: 'Manipur', cities: ['Imphal', 'Kakching', 'Thoubal', 'Churachandpur', 'Bishnupur'] },
    { state: 'Meghalaya', cities: ['Shillong', 'Tura', 'Jowai', 'Nongpoh', 'Williamnagar'] },
    { state: 'Mizoram', cities: ['Aizawl', 'Lunglei', 'Champhai', 'Kolasib', 'Serchhip'] },
    { state: 'Nagaland', cities: ['Kohima', 'Dimapur', 'Mokokchung', 'Wokha', 'Phek'] },
    { state: 'Odisha', cities: ['Bhubaneswar', 'Cuttack', 'Berhampur', 'Rourkela', 'Sambalpur'] },
    { state: 'Punjab', cities: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala'] },
    { state: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Ajmer', 'Bikaner'] },
    { state: 'Sikkim', cities: ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan', 'Rangpo'] },
    { state: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'] },
    { state: 'Telangana', cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Mahbubnagar'] },
    { state: 'Tripura', cities: ['Agartala', 'Dharmanagar', 'Ambassa', 'Udaipur', 'Kailashahar'] },
    { state: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut'] },
    { state: 'Uttarakhand', cities: ['Dehradun', 'Haridwar', 'Nainital', 'Rudrapur', 'Roorkee'] },
    { state: 'West Bengal', cities: ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri', 'Asansol'] },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\JBPortal\JBFrontend\JBPortalFrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map