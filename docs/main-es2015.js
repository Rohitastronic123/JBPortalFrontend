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

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"about-page\">\n    <section class=\"about-header\">\n      <h1>About Our Job Portal</h1>\n      <p>We connect job seekers with their dream jobs and companies with the best talents.</p>\n    </section>\n  \n    <section class=\"about-images\">\n      <img src=\"./../../assets/images/jobillus.jpg\" alt=\"Job search illustration\" class=\"fade-in\" />\n      <img src=\"./../../assets/images/hire.jpg\" alt=\"Company hiring\" class=\"fade-in\" />\n    </section>\n  \n    <section class=\"about-description\">\n      <h2>Our Mission</h2>\n      <p>Our mission is to simplify the job search process, making it easier for people to find jobs they love.</p>\n    </section>\n  \n    <section class=\"about-values\">\n      <h2>Why Choose Us</h2>\n      <ul>\n        <li>Fast and easy application process</li>\n        <li>Wide range of job opportunities</li>\n        <li>Trusted by top companies</li>\n      </ul>\n    </section>\n  </div>\n  "

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

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- contact.component.html -->\n\n<div class=\"contact-container\">\n    <h2>Contact Us</h2>\n    \n    <!-- Contact Form -->\n    <form #contactForm=\"ngForm\" (ngSubmit)=\"onSubmit(contactForm)\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name:</label>\n        <input type=\"text\" id=\"name\" name=\"name\" ngModel required />\n      </div>\n  \n      <div class=\"form-group\">\n        <label for=\"mobile\">Mobile Number:</label>\n        <input type=\"text\" id=\"mobile\" name=\"mobile\" ngModel required />\n      </div>\n  \n      <div class=\"form-group\">\n        <label for=\"email\">Email:</label>\n        <input type=\"email\" id=\"email\" name=\"email\" ngModel required />\n      </div>\n  \n      <button type=\"submit\" [disabled]=\"!contactForm.valid\">Send</button>\n    </form>\n  \n    <div class=\"company-info\">\n      <h3>Company Information</h3>\n      <p>\n        <strong>Company Name:</strong> Tech Solutions Inc.<br />\n        <strong>Address:</strong> 123 Main Street, City, Country<br />\n        <strong>Phone:</strong> (123) 456-7890<br />\n        <strong>Email:</strong> info@techsolutions.com\n      </p>\n    </div>\n  \n    <!-- Map Section -->\n    <div class=\"map-container\">\n      <hr class=\"custom-hr\">\n      <h3>Our Location</h3>\n      <iframe\n        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.8167810901662!2d75.75784329982713!3d26.787948236773712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dca578ef248e5%3A0xa7b3af2f07dafe20!2sShree%20Madrampura%20Balaji!5e0!3m2!1sen!2sin!4v1730874129359!5m2!1sen!2sin\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\n        width=\"100%\" height=\"300\" style=\"border: 0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <!-- Sidebar -->\n  <mat-sidenav #sidenav mode=\"over\" [(opened)]=\"isSidebarOpen\" class=\"sidebar\">\n    <div class=\"sidebar-content\">\n      <h2  (click)=\"navigateTo('')\">Menu</h2>\n      <button mat-button (click)=\"navigateTo('profile')\">Profile</button>\n      <!-- <button mat-button (click)=\"navigateTo('resumeupdate')\">Update Resume</button> -->\n      <button mat-button (click)=\"navigateTo('jobs')\">Job Listings</button>\n      <button mat-button (click)=\"navigateTo('applications')\">Applications</button>\n      <button mat-button (click)=\"navigateTo('messages')\">Messages</button>\n      <button mat-button (click)=\"navigateTo('messages')\">Logout</button>\n    </div>\n  </mat-sidenav>\n\n  <!-- Main Content -->\n  <mat-sidenav-content class=\"main-content\">\n    <button mat-icon-button class=\"sidebar-toggle\" (click)=\"isSidebarOpen = !isSidebarOpen\">\n      <mat-icon>menu</mat-icon>\n    </button>\n\n    <div class=\"dashboard-container\">\n      <div class=\"dashboard-header\">\n        <h1>Welcome, {{ userName }}!</h1>\n        <p>Explore new opportunities and manage your applications.</p>\n      </div>\n\n      <div class=\"dashboard-content\">\n        <!-- Profile Summary Card -->\n        <mat-card class=\"profile-card animate-card\">\n          <mat-card-header>\n            <mat-card-title>Your Profile Summary</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <p><strong>Jobs Applied:</strong> 12</p>\n            <p><strong>Interviews Scheduled:</strong> 3</p>\n            <button mat-button color=\"primary\" (click)=\"goToProfile()\">View Profile</button>\n          </mat-card-content>\n        </mat-card>\n\n        <!-- Job Listings -->\n        <mat-card class=\"jobs-card animate-card\">\n          <mat-card-header>\n            <mat-card-title>Latest Job Listings</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <div class=\"job-listing\" *ngFor=\"let job of jobs\">\n              <h3>{{ job.title }}</h3>\n              <p>{{ job.company }}</p>\n              <p><strong>Location:</strong> {{ job.location }}</p>\n              <button mat-button color=\"accent\" (click)=\"applyToJob(job.id)\">Apply</button>\n            </div>\n          </mat-card-content>\n        </mat-card>\n\n        <!-- Applications Section -->\n        <mat-card class=\"applications-card animate-card\">\n          <mat-card-header>\n            <mat-card-title>Your Applications</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <table mat-table [dataSource]=\"applications\" class=\"mat-elevation-z8\">\n              <ng-container matColumnDef=\"jobTitle\">\n                <th mat-header-cell *matHeaderCellDef> Job Title </th>\n                <td mat-cell *matCellDef=\"let application\"> {{ application.jobTitle }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"status\">\n                <th mat-header-cell *matHeaderCellDef> Status </th>\n                <td mat-cell *matCellDef=\"let application\"> {{ application.status }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"actions\">\n                <th mat-header-cell *matHeaderCellDef> Actions </th>\n                <td mat-cell *matCellDef=\"let application\">\n                  <button mat-button (click)=\"viewApplication(application.id)\">View</button>\n                </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n          </mat-card-content>\n        </mat-card>\n\n        <!-- Messages Section -->\n        <mat-card class=\"messages-card animate-card\">\n          <mat-card-header>\n            <mat-card-title>Messages</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <div *ngFor=\"let message of messages\" class=\"message\">\n              <p><strong>{{ message.sender }}:</strong> {{ message.content }}</p>\n              <button mat-button color=\"primary\" (click)=\"viewMessage(message.id)\">View</button>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"custom-toolbar\">\n  <span class=\"logo\">\n    <img src=\"./assets/images/logo.gif\" alt=\"Logo\" />\n  </span>\n\n  <span class=\"spacer\"></span>\n\n  <!-- For larger screens, display buttons directly -->\n  <div class=\"desktop-nav\">\n    <button mat-button class=\"nav-button\" routerLink=\"/app-resume\">Resume</button>\n    <button mat-button class=\"nav-button\" (click)=\"scrollToAbout()\">About</button>\n    <button mat-button class=\"nav-button\" (click)=\"scrollToContact()\">Contact</button>\n    <button mat-button class=\"nav-button\" *ngIf=\"!isLoggedIn\" (click)=\"openLoginDialog()\">Login</button>\n    <button  mat-button class=\"nav-button\"  *ngIf=\"isLoggedIn\" routerLink=\"/dashboard\">Dashboard</button>\n    <button mat-button class=\"nav-button\" *ngIf=\"isLoggedIn\" (click)=\"logout()\">Logout</button>\n    <button mat-button class=\"nav-button\" *ngIf=\"!isLoggedIn\" (click)=\"openSignupDialog()\">Signup</button>\n  </div>\n\n  <!-- Menu button for mobile -->\n  <span mat-button [matMenuTriggerFor]=\"menu\" class=\"menu-button\" (click)=\"toggleMenu()\">\n    <img [src]=\"isMenuOpen ? './assets/images/cross.png' : './assets/images/menu.png'\" \n         style=\"width: 30px; height: 30px;\" \n         [@fadeInOut]>\n  </span>\n  \n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/app-resume\">Resume</button>\n    <button mat-menu-item (click)=\"scrollToAbout()\">About</button>\n    <button mat-menu-item (click)=\"scrollToContact()\">Contact</button>\n    <button mat-menu-item  *ngIf=\"!isLoggedIn\" (click)=\"openLoginDialog()\">Login</button>\n    <button  mat-menu-item *ngIf=\"isLoggedIn\" routerLink=\"/dashboard\">Dashboard</button>\n     <button  mat-menu-item *ngIf=\"isLoggedIn\" (click)=\"logout()\">Logout</button>\n    <button mat-menu-item  *ngIf=\"!isLoggedIn\" (click)=\"openSignupDialog()\">Signup</button>\n  </mat-menu>\n  <div class=\"progress-container\">\n    <div class=\"progress-bar\" [style.width.%]=\"scrollProgress\"></div>\n  </div>\n</mat-toolbar>\n\n<app-carousel></app-carousel>\n<app-jbcard></app-jbcard>\n\n<hr class=\"custom-hr\">\n<app-about id=\"about\"></app-about>\n\n<hr class=\"custom-hr-contact\">\n<app-contact id=\"contact\"></app-contact>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jbcard/jbcard.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jbcard/jbcard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"custom-hr\">\n<h1 style=\"text-align: center;padding-top: 40px;margin-bottom: 35px;\">Our Services</h1>\n\n<div class=\"card-container\">\n    <mat-card *ngFor=\"let card of cards\" class=\"example-card\" @fadeIn>\n        <img mat-card-image [src]=\"card.image\" style=\"aspect-ratio: 3/2;\" alt=\"{{ card.title }}\" />\n      <mat-card-header>\n        <div mat-card-avatar class=\"card-avatar\"></div>\n        <mat-card-title>{{ card.title }}</mat-card-title>\n        <mat-card-subtitle>{{ card.subtitle }}</mat-card-subtitle>\n      </mat-card-header>\n    \n      <mat-card-content>\n        <p>{{ card.description }}</p>\n      </mat-card-content>\n      <mat-card-actions>\n        \n        <button mat-button color=\"primary\" (click)=\"goToLink(card.link)\" >Go to</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Login</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n    <mat-form-field>\n      <mat-label>Email</mat-label>\n      <input matInput type=\"email\" formControlName=\"email\">\n      <mat-error *ngIf=\"loginForm.get('email')?.hasError('required')\">Email is required.</mat-error>\n      <mat-error *ngIf=\"loginForm.get('email')?.hasError('email')\">Please enter a valid email.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Password</mat-label>\n      <input matInput type=\"password\" formControlName=\"password\">\n      <mat-error *ngIf=\"loginForm.get('password')?.hasError('required')\">Password is required.</mat-error>\n    </mat-form-field>\n  </form>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button type=\"submit\" (click)=\"onLogin()\" [disabled]=\"loginForm.invalid\">Login</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container mat-elevation-z4\">\n    <button mat-icon-button class=\"back-button\" (click)=\"goBack()\">\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n  \n    <div *ngIf=\"loading\" class=\"loading\">\n      <mat-spinner></mat-spinner>\n      <p>Loading your profile...</p>\n    </div>\n  \n    <div *ngIf=\"error\" class=\"error-message\">\n      <mat-icon color=\"warn\">error</mat-icon>\n      <p>{{ error }}</p>\n    </div>\n  \n    <div *ngIf=\"!loading && !error && userData\" class=\"profile-content\">\n      <h1>Your Profile</h1>\n      <div class=\"profile-details\">\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>{{ userData.name }}</mat-card-title>\n            <mat-card-subtitle>{{ userData.email }}</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <p><strong>City:</strong> {{ userData.city }}</p>\n            <p><strong>State:</strong> {{ userData.state }}</p>\n            <!-- <p *ngIf=\"userData.phone\"><strong>Phone:</strong> {{ userData.phone }}</p>\n            <p *ngIf=\"userData.address\"><strong>Address:</strong> {{ userData.address }}</p>\n            <p *ngIf=\"userData.joinedDate\"><strong>Joined on:</strong> {{ userData.joinedDate | date }}</p> -->\n          </mat-card-content>\n          <mat-card-actions>\n            <!-- <button mat-button color=\"primary\">Edit Profile</button> -->\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n  "

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

/***/ "./node_modules/raw-loader/index.js!./src/app/resume-upload/resume-upload.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resume-upload/resume-upload.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- Step 1: Upload Resume -->\n  <h2>Upload Resume</h2>\n  \n  <div class=\"file-upload-container\" (click)=\"fileInput.click()\">\n    <i class=\"fas fa-upload file-icon\"></i>\n    <span class=\"file-name\">{{ selectedFileName || 'Choose a file' }}</span>\n  </div>\n  <input #fileInput type=\"file\" (change)=\"onFileSelect($event)\" />\n  \n  <!-- Step 2: Display extracted data in editable form, only after resume is uploaded -->\n  <div *ngIf=\"resumeUploaded\">\n    <h2>Edit Extracted Resume Data</h2>\n    <form [formGroup]=\"resumeForm\" (ngSubmit)=\"onGenerateResume()\">\n      <div>\n        <label for=\"name\">Name</label>\n        <input id=\"name\" formControlName=\"name\" placeholder=\"Name\" />\n      </div>\n\n      <div>\n        <label for=\"jobTitle\">Job Title</label>\n        <input id=\"jobTitle\" formControlName=\"jobTitle\" placeholder=\"Job Title\" />\n      </div>\n\n      <div>\n        <label for=\"contactNo\">Contact Number</label>\n        <input id=\"contactNo\" formControlName=\"contactNo\" placeholder=\"Phone\" />\n      </div>\n\n      <div>\n        <label for=\"email\">Email</label>\n        <input id=\"email\" formControlName=\"email\" placeholder=\"Email\" />\n      </div>\n\n      <div>\n        <label for=\"address\">Address</label>\n        <input id=\"address\" formControlName=\"address\" placeholder=\"Address\" />\n      </div>\n\n      <div>\n        <label for=\"socialProfile\">LinkedIn Profile</label>\n        <input id=\"socialProfile\" formControlName=\"socialProfile\" placeholder=\"LinkedIn URL\" />\n      </div>\n\n      <div>\n        <label for=\"professionalSummary\">Professional Summary</label>\n        <textarea id=\"professionalSummary\" formControlName=\"professionalSummary\" placeholder=\"Summary\"></textarea>\n      </div>\n\n      <!-- Submit Button -->\n      <button type=\"submit\" [disabled]=\"!resumeForm.valid\">Generate Resume PDF</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h2 mat-dialog-title>Signup</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"signupForm\" (ngSubmit)=\"submitForm()\">\n    <div class=\"form-field\">\n      <mat-form-field class=\"full-width\">\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"name\" required>\n        <mat-error *ngIf=\"signupForm.get('name')?.hasError('required')\">Name is required.</mat-error>\n      </mat-form-field>\n    </div>\n\n    <mat-form-field class=\"full-width\" >\n      <mat-label >State</mat-label>\n      <mat-select formControlName=\"state\" (selectionChange)=\"onStateChange($event.value)\">\n        <mat-option *ngFor=\"let state of states\" [value]=\"state.state\">{{ state.state }}</mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"signupForm.get('state')?.hasError('required')\">State is required.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <mat-label>City</mat-label>\n      <mat-select formControlName=\"city\" required>\n        <mat-option *ngFor=\"let city of cities\" [value]=\"city\">{{ city }}</mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"signupForm.get('city')?.hasError('required')\">City is required.</mat-error>\n    </mat-form-field>\n\n    <div class=\"form-field\">\n      <mat-form-field class=\"full-width\">\n        <mat-label>Email</mat-label>\n        <input matInput formControlName=\"email\" type=\"email\" required>\n        <mat-error *ngIf=\"signupForm.get('email')?.hasError('required')\">Email is required.</mat-error>\n        <mat-error *ngIf=\"signupForm.get('email')?.hasError('email')\">Please enter a valid email.</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-field\">\n      <mat-form-field class=\"full-width\" >\n        <mat-label>Password</mat-label>\n        <input matInput formControlName=\"password\" type=\"password\" required>\n        <mat-error *ngIf=\"signupForm.get('password')?.hasError('required')\">Password is required.</mat-error>\n      </mat-form-field>\n    </div>\n\n    <mat-dialog-actions>\n      <button mat-button mat-dialog-close>Cancel</button>\n      <button mat-button type=\"submit\" [disabled]=\"!signupForm.valid\">Signup</button>\n    </mat-dialog-actions>\n  </form>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-page {\n  padding: 20px;\n  color: #333;\n  text-align: center;\n  padding-top: 60px;\n}\n.about-page .about-header h1 {\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n  color: #2c3e50;\n}\n.about-page .about-header p {\n  font-size: 1.2rem;\n  color: #7f8c8d;\n}\n.about-page .about-images {\n  display: flex;\n  justify-content: center;\n  /* Center images horizontally */\n  margin: 40px 0;\n  flex-wrap: wrap;\n  /* Allow images to wrap */\n  gap: 20px;\n  /* Add space between images */\n}\n.about-page .about-images img {\n  width: 600px;\n  height: 400px;\n  /* Set a base width */\n  aspect-ratio: 16/9;\n  /* Ensure images maintain a 16:9 aspect ratio */\n  height: auto;\n  /* Maintain aspect ratio */\n  border-radius: 15px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n.about-page .about-images img:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.about-page .about-description {\n  margin-bottom: 40px;\n}\n.about-page .about-description h2 {\n  font-size: 2rem;\n  margin-bottom: 15px;\n  color: #16a085;\n}\n.about-page .about-description p {\n  font-size: 1.1rem;\n  line-height: 1.6;\n}\n.about-page .about-values h2 {\n  font-size: 2rem;\n  margin-bottom: 15px;\n  color: #2980b9;\n}\n.about-page .about-values ul {\n  list-style: none;\n  padding: 0;\n}\n.about-page .about-values ul li {\n  font-size: 1.1rem;\n  margin: 10px 0;\n  color: #34495e;\n}\n@media (max-width: 1200px) {\n  .about-page .about-images img {\n    width: 250px;\n  }\n  .about-page .about-header h1 {\n    font-size: 2.2rem;\n  }\n  .about-page .about-description h2, .about-page .about-values h2 {\n    font-size: 1.8rem;\n  }\n}\n@media (max-width: 768px) {\n  .about-page .about-images {\n    display: block;\n    text-align: center;\n  }\n  .about-page .about-images img {\n    margin: 20px auto;\n    width: 200px;\n  }\n  .about-page .about-header h1 {\n    font-size: 2rem;\n  }\n  .about-page .about-header p, .about-page .about-description p, .about-page .about-values li {\n    font-size: 1rem;\n  }\n  .about-page .about-description h2, .about-page .about-values h2 {\n    font-size: 1.6rem;\n  }\n}\n@media (max-width: 480px) {\n  .about-page {\n    padding: 10px;\n  }\n  .about-page .about-header h1 {\n    font-size: 1.8rem;\n  }\n  .about-page .about-header p {\n    font-size: 0.9rem;\n  }\n  .about-page .about-images img {\n    width: 150px;\n  }\n  .about-page .about-description h2, .about-page .about-values h2 {\n    font-size: 1.4rem;\n  }\n  .about-page .about-description p, .about-page .about-values li {\n    font-size: 0.9rem;\n  }\n}\n.custom-hr {\n  border: none;\n  text-align: center;\n  overflow: visible;\n  margin: 40px 0;\n  height: 1px;\n  background-color: #bdc3c7;\n  position: relative;\n  transition: background-color 0.4s ease;\n}\n.custom-hr:after {\n  content: \"Our Services\";\n  display: inline-block;\n  position: relative;\n  top: -14px;\n  padding: 0 10px;\n  background: white;\n  font-size: 16px;\n  color: #7f8c8d;\n  transition: color 0.4s ease, background-color 0.4s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXEpCUG9ydGFsXFxKQkZyb250ZW5kXFxKQlBvcnRhbEZyb250ZW5kL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNGLGlCQUFBO0FDQ0E7QURDSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ047QURFSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0FOO0FESUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFBeUIsK0JBQUE7RUFDekIsY0FBQTtFQUNBLGVBQUE7RUFBaUIseUJBQUE7RUFDakIsU0FBQTtFQUFXLDZCQUFBO0FDQ2Y7QURDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQWUscUJBQUE7RUFDZixrQkFBQTtFQUFzQiwrQ0FBQTtFQUN0QixZQUFBO0VBQWMsMEJBQUE7RUFDZCxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUFBLDBFQUFBO0FDSU47QURGTTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUNJUjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NOO0FERUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQU47QURLSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNITjtBRE1JO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDSk47QURNTTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNKUjtBRFVFO0VBRUk7SUFDRSxZQUFBO0VDVE47RURhRTtJQUNFLGlCQUFBO0VDWEo7RURjRTtJQUNFLGlCQUFBO0VDWko7QUFDRjtBRGVFO0VBQ0U7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7RUNiSjtFRGVJO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0VDYk47RURpQkU7SUFDRSxlQUFBO0VDZko7RURrQkU7SUFDRSxlQUFBO0VDaEJKO0VEbUJFO0lBQ0UsaUJBQUE7RUNqQko7QUFDRjtBRG9CRTtFQW5IRjtJQW9ISSxhQUFBO0VDakJGO0VEbUJFO0lBQ0UsaUJBQUE7RUNqQko7RURvQkU7SUFDRSxpQkFBQTtFQ2xCSjtFRHFCRTtJQUNFLFlBQUE7RUNuQko7RURzQkU7SUFDRSxpQkFBQTtFQ3BCSjtFRHVCRTtJQUNFLGlCQUFBO0VDckJKO0FBQ0Y7QUR3QkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FDckJGO0FEd0JFO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdURBQUE7QUN0QkoiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1wYWdlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxucGFkZGluZy10b3A6IDYwcHg7XHJcbiAgLmFib3V0LWhlYWRlciB7XHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGNvbG9yOiAjN2Y4YzhkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFib3V0LWltYWdlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBpbWFnZXMgaG9yaXpvbnRhbGx5ICovXHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDsgLyogQWxsb3cgaW1hZ2VzIHRvIHdyYXAgKi9cclxuICAgIGdhcDogMjBweDsgLyogQWRkIHNwYWNlIGJldHdlZW4gaW1hZ2VzICovXHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwMHB4OyAvKiBTZXQgYSBiYXNlIHdpZHRoICovXHJcbiAgICAgIGFzcGVjdC1yYXRpbzogMTYgLyA5OyAvKiBFbnN1cmUgaW1hZ2VzIG1haW50YWluIGEgMTY6OSBhc3BlY3QgcmF0aW8gKi9cclxuICAgICAgaGVpZ2h0OiBhdXRvOyAvKiBNYWludGFpbiBhc3BlY3QgcmF0aW8gKi9cclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hYm91dC1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICBjb2xvcjogIzE2YTA4NTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtdmFsdWVzIHtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICBjb2xvcjogIzI5ODBiOTtcclxuICAgIH1cclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgY29sb3I6ICMzNDQ5NWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1lZGlhIFF1ZXJpZXMgZm9yIHJlc3BvbnNpdmVuZXNzXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmFib3V0LWltYWdlcyB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWhlYWRlciBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1kZXNjcmlwdGlvbiBoMiwgLmFib3V0LXZhbHVlcyBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuYWJvdXQtaW1hZ2VzIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWhlYWRlciBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtaGVhZGVyIHAsIC5hYm91dC1kZXNjcmlwdGlvbiBwLCAuYWJvdXQtdmFsdWVzIGxpIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1kZXNjcmlwdGlvbiBoMiwgLmFib3V0LXZhbHVlcyBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIC5hYm91dC1oZWFkZXIgaDEge1xyXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtaGVhZGVyIHAge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtaW1hZ2VzIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtZGVzY3JpcHRpb24gaDIsIC5hYm91dC12YWx1ZXMgaDIge1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtZGVzY3JpcHRpb24gcCwgLmFib3V0LXZhbHVlcyBsaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY3VzdG9tLWhyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIG1hcmdpbjogNDBweCAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlOyAvLyBTbW9vdGggdHJhbnNpdGlvbiBmb3IgdGhlIGxpbmUgY29sb3JcclxuICBcclxuICAvLyBUaGUgdGV4dCBjb250ZW50IGluIHRoZSBtaWRkbGUgb2YgdGhlIGxpbmVcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdPdXIgU2VydmljZXMnOyAvLyBSZXBsYWNlIHdpdGggZHluYW1pYyB0ZXh0IGlmIG5lZWRlZFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTRweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlOyAvLyBTbW9vdGggdHJhbnNpdGlvbiBmb3IgdGV4dCBhbmQgYmFja2dyb3VuZFxyXG4gIH1cclxufSIsIi5hYm91dC1wYWdlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG4uYWJvdXQtcGFnZSAuYWJvdXQtaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuLmFib3V0LXBhZ2UgLmFib3V0LWhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjN2Y4YzhkO1xufVxuLmFib3V0LXBhZ2UgLmFib3V0LWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiBDZW50ZXIgaW1hZ2VzIGhvcml6b250YWxseSAqL1xuICBtYXJnaW46IDQwcHggMDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAvKiBBbGxvdyBpbWFnZXMgdG8gd3JhcCAqL1xuICBnYXA6IDIwcHg7XG4gIC8qIEFkZCBzcGFjZSBiZXR3ZWVuIGltYWdlcyAqL1xufVxuLmFib3V0LXBhZ2UgLmFib3V0LWltYWdlcyBpbWcge1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIC8qIFNldCBhIGJhc2Ugd2lkdGggKi9cbiAgYXNwZWN0LXJhdGlvOiAxNi85O1xuICAvKiBFbnN1cmUgaW1hZ2VzIG1haW50YWluIGEgMTY6OSBhc3BlY3QgcmF0aW8gKi9cbiAgaGVpZ2h0OiBhdXRvO1xuICAvKiBNYWludGFpbiBhc3BlY3QgcmF0aW8gKi9cbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uYWJvdXQtcGFnZSAuYWJvdXQtaW1hZ2VzIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5hYm91dC1wYWdlIC5hYm91dC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uYWJvdXQtcGFnZSAuYWJvdXQtZGVzY3JpcHRpb24gaDIge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjMTZhMDg1O1xufVxuLmFib3V0LXBhZ2UgLmFib3V0LWRlc2NyaXB0aW9uIHAge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbi5hYm91dC1wYWdlIC5hYm91dC12YWx1ZXMgaDIge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjMjk4MGI5O1xufVxuLmFib3V0LXBhZ2UgLmFib3V0LXZhbHVlcyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4uYWJvdXQtcGFnZSAuYWJvdXQtdmFsdWVzIHVsIGxpIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIG1hcmdpbjogMTBweCAwO1xuICBjb2xvcjogIzM0NDk1ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFib3V0LXBhZ2UgLmFib3V0LWltYWdlcyBpbWcge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuICAuYWJvdXQtcGFnZSAuYWJvdXQtaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgfVxuICAuYWJvdXQtcGFnZSAuYWJvdXQtZGVzY3JpcHRpb24gaDIsIC5hYm91dC1wYWdlIC5hYm91dC12YWx1ZXMgaDIge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFib3V0LXBhZ2UgLmFib3V0LWltYWdlcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5hYm91dC1wYWdlIC5hYm91dC1pbWFnZXMgaW1nIHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmFib3V0LXBhZ2UgLmFib3V0LWhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5hYm91dC1wYWdlIC5hYm91dC1oZWFkZXIgcCwgLmFib3V0LXBhZ2UgLmFib3V0LWRlc2NyaXB0aW9uIHAsIC5hYm91dC1wYWdlIC5hYm91dC12YWx1ZXMgbGkge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAuYWJvdXQtcGFnZSAuYWJvdXQtZGVzY3JpcHRpb24gaDIsIC5hYm91dC1wYWdlIC5hYm91dC12YWx1ZXMgaDIge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmFib3V0LXBhZ2Uge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmFib3V0LXBhZ2UgLmFib3V0LWhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cbiAgLmFib3V0LXBhZ2UgLmFib3V0LWhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICAuYWJvdXQtcGFnZSAuYWJvdXQtaW1hZ2VzIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG4gIC5hYm91dC1wYWdlIC5hYm91dC1kZXNjcmlwdGlvbiBoMiwgLmFib3V0LXBhZ2UgLmFib3V0LXZhbHVlcyBoMiB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbiAgLmFib3V0LXBhZ2UgLmFib3V0LWRlc2NyaXB0aW9uIHAsIC5hYm91dC1wYWdlIC5hYm91dC12YWx1ZXMgbGkge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG59XG5cbi5jdXN0b20taHIge1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG1hcmdpbjogNDBweCAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbn1cbi5jdXN0b20taHI6YWZ0ZXIge1xuICBjb250ZW50OiBcIk91ciBTZXJ2aWNlc1wiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTRweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzdmOGM4ZDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC40cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let AboutComponent = class AboutComponent {
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                ]),
            ]),
        ],
        styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
    })
], AboutComponent);



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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _resume_upload_resume_upload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resume-upload/resume-upload.component */ "./src/app/resume-upload/resume-upload.component.ts");














const routes = [
    // Default route
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'resume-builder', component: _resume_builder_resume_builder_component__WEBPACK_IMPORTED_MODULE_6__["ResumeBuilderComponent"] },
    { path: 'app-resume', component: _resume_builder2_resume_builder2_component__WEBPACK_IMPORTED_MODULE_7__["ResumeBuilder2Component"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"] },
    { path: 'resumeupdate', component: _resume_upload_resume_upload_component__WEBPACK_IMPORTED_MODULE_13__["ResumeUploadComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _resume_upload_resume_upload_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./resume-upload/resume-upload.component */ "./src/app/resume-upload/resume-upload.component.ts");

































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
            _resume_builder2_resume_builder2_component__WEBPACK_IMPORTED_MODULE_25__["ResumeBuilder2Component"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["DashboardComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_27__["AboutComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_28__["ContactComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_30__["ProfileComponent"],
            _resume_upload_resume_upload_component__WEBPACK_IMPORTED_MODULE_31__["ResumeUploadComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            // Required for ngx-toastr animations
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
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

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
        this.TOKEN_EXPIRATION_TIME = 30 * 60 * 1000; // 30 minutes in milliseconds
    }
    canActivate() {
        const token = localStorage.getItem('token');
        const tokenTimestamp = localStorage.getItem('tokenTimestamp');
        if (token && tokenTimestamp) {
            const currentTime = Date.now();
            const tokenTime = parseInt(tokenTimestamp, 10);
            if (currentTime - tokenTime < this.TOKEN_EXPIRATION_TIME) {
                return true; // Token is still valid
            }
            else {
                // Token has expired, remove it from localStorage
                localStorage.removeItem('token');
                localStorage.removeItem('tokenTimestamp');
            }
        }
        // If not authenticated, redirect to login
        this.router.navigate(['']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/carousel/carousel.component.scss":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-inner img {\n  margin-top: 65px;\n  width: 100%;\n  height: 50%;\n  /* Adjust height as needed */\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  background-color: black;\n  /* Optional: customize control colors */\n}\n\n.carousel-image {\n  width: 100%;\n  aspect-ratio: 16/9;\n}\n\n@media (max-width: 992px) {\n  .carousel-image {\n    aspect-ratio: 4/3;\n  }\n}\n\n@media (max-width: 576px) {\n  .carousel-image {\n    aspect-ratio: 1/1;\n  }\n}\n\n/* Optional: Adjust carousel controls for better mobile view */\n\n.carousel-control-prev,\n.carousel-control-next {\n  width: 5%;\n  background-color: whitesmoke;\n}\n\n#carouselExample {\n  margin-top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvRDpcXEpCUG9ydGFsXFxKQkZyb250ZW5kXFxKQlBvcnRhbEZyb250ZW5kL3NyY1xcYXBwXFxjYXJvdXNlbFxcY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUFhLDRCQUFBO0FDRWpCOztBRENFOztFQUVFLHVCQUFBO0VBQXlCLHVDQUFBO0FDRzdCOztBRERFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkk7RUFKRjtJQUtJLGlCQUFBO0VDS0o7QUFDRjs7QURISTtFQVJGO0lBU0ksaUJBQUE7RUNNSjtBQUNGOztBREhFLDhEQUFBOztBQUNBOztFQUVFLFNBQUE7RUFDQSw0QkFBQTtBQ01KOztBREpFO0VBQ0UsZUFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaW5uZXIgaW1nIHtcclxuICBtYXJnaW4tdG9wOjY1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlOyAvKiBBZGp1c3QgaGVpZ2h0IGFzIG5lZWRlZCAqL1xyXG4gIH1cclxuICBcclxuICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24sXHJcbiAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAvKiBPcHRpb25hbDogY3VzdG9taXplIGNvbnRyb2wgY29sb3JzICovXHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFzcGVjdC1yYXRpbzogMTYgLyA5OyAvLyBUaGlzIHNldHMgYSAxNjo5IGFzcGVjdCByYXRpbyBmb3IgdGhlIGltYWdlc1xyXG4gIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7IC8vIFRhYmxldCBzY3JlZW5zXHJcbiAgICAgIGFzcGVjdC1yYXRpbzogNCAvIDM7IC8vIENoYW5nZSBhc3BlY3QgcmF0aW8gZm9yIHRhYmxldHNcclxuICAgIH1cclxuICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkgeyAvLyBNb2JpbGUgc2NyZWVuc1xyXG4gICAgICBhc3BlY3QtcmF0aW86IDEgLyAxOyAvLyBDaGFuZ2UgYXNwZWN0IHJhdGlvIHRvIHNxdWFyZSBmb3IgbW9iaWxlIHNjcmVlbnNcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogT3B0aW9uYWw6IEFkanVzdCBjYXJvdXNlbCBjb250cm9scyBmb3IgYmV0dGVyIG1vYmlsZSB2aWV3ICovXHJcbiAgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcclxuICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICAgIHdpZHRoOiA1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgfVxyXG4gICNjYXJvdXNlbEV4YW1wbGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgfSIsIi5jYXJvdXNlbC1pbm5lciBpbWcge1xuICBtYXJnaW4tdG9wOiA2NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIC8qIEFkanVzdCBoZWlnaHQgYXMgbmVlZGVkICovXG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAvKiBPcHRpb25hbDogY3VzdG9taXplIGNvbnRyb2wgY29sb3JzICovXG59XG5cbi5jYXJvdXNlbC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDE2Lzk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNhcm91c2VsLWltYWdlIHtcbiAgICBhc3BlY3QtcmF0aW86IDQvMztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jYXJvdXNlbC1pbWFnZSB7XG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIH1cbn1cblxuLyogT3B0aW9uYWw6IEFkanVzdCBjYXJvdXNlbCBjb250cm9scyBmb3IgYmV0dGVyIG1vYmlsZSB2aWV3ICovXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHdpZHRoOiA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuI2Nhcm91c2VsRXhhbXBsZSB7XG4gIG1hcmdpbi10b3A6IDFweDtcbn0iXX0= */"

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

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Global Styles for Contact Component */\n.contact-container {\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 30px;\n  padding-top: 60px;\n  border-radius: 10px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  -webkit-animation: fadeIn 1s ease-out;\n          animation: fadeIn 1s ease-out;\n  /* Fade-in animation */\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nh2 {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 30px;\n  color: #2c3e50;\n  font-weight: 600;\n}\n.form-group {\n  margin-bottom: 20px;\n}\nlabel {\n  display: block;\n  font-weight: 500;\n  font-size: 1.1rem;\n  color: #34495e;\n  margin-bottom: 8px;\n}\ninput {\n  width: 100%;\n  padding: 12px;\n  border-radius: 6px;\n  border: 2px solid #bdc3c7;\n  font-size: 1rem;\n  transition: border 0.3s ease, box-shadow 0.3s ease;\n}\ninput:focus {\n  outline: none;\n  border: 2px solid #3498db;\n  box-shadow: 0 0 10px rgba(52, 152, 219, 0.3);\n}\nbutton {\n  padding: 12px 30px;\n  background-color: #3498db;\n  color: #fff;\n  font-size: 1.1rem;\n  border: none;\n  border-radius: 30px;\n  width: 100%;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\nbutton:hover {\n  background-color: #2980b9;\n}\nbutton:disabled {\n  background-color: #bdc3c7;\n  cursor: not-allowed;\n}\n.company-info {\n  background: #ecf0f1;\n  border-radius: 10px;\n  padding: 20px;\n  margin-top: 40px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  -webkit-animation: slideIn 1s ease-out;\n          animation: slideIn 1s ease-out;\n}\n@-webkit-keyframes slideIn {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@keyframes slideIn {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n.company-info h3 {\n  text-align: center;\n  font-size: 1.8rem;\n  color: #2c3e50;\n  margin-bottom: 15px;\n}\n.company-info p {\n  font-size: 1rem;\n  color: #7f8c8d;\n  line-height: 1.6;\n}\n.map-container {\n  margin-top: 40px;\n  text-align: center;\n}\n.map-container iframe {\n  border-radius: 10px;\n  width: 100%;\n  height: 300px;\n  border: none;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.map-container iframe:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n/* Responsive Styles */\n@media (max-width: 768px) {\n  .contact-container {\n    padding: 20px;\n  }\n\n  h2 {\n    font-size: 2rem;\n  }\n\n  input {\n    font-size: 0.9rem;\n    padding: 10px;\n  }\n\n  button {\n    font-size: 1rem;\n    padding: 10px 20px;\n  }\n\n  .company-info h3 {\n    font-size: 1.5rem;\n  }\n\n  .company-info p {\n    font-size: 0.95rem;\n  }\n\n  .map-container iframe {\n    height: 250px;\n  }\n}\n@media (max-width: 480px) {\n  .contact-container {\n    padding: 15px;\n  }\n\n  h2 {\n    font-size: 1.8rem;\n  }\n\n  input {\n    font-size: 0.85rem;\n    padding: 8px;\n  }\n\n  button {\n    font-size: 0.95rem;\n    padding: 10px;\n  }\n\n  .company-info h3 {\n    font-size: 1.3rem;\n  }\n\n  .company-info p {\n    font-size: 0.85rem;\n  }\n\n  .map-container iframe {\n    height: 200px;\n  }\n}\n.custom-hr {\n  border: none;\n  text-align: center;\n  overflow: visible;\n  margin: 40px 0;\n  height: 1px;\n  background-color: #bdc3c7;\n  position: relative;\n  transition: background-color 0.4s ease;\n}\n.custom-hr:after {\n  content: \"Our Location\";\n  display: inline-block;\n  position: relative;\n  top: -14px;\n  padding: 0 10px;\n  background: white;\n  font-size: 16px;\n  color: #7f8c8d;\n  transition: color 0.4s ease, background-color 0.4s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9EOlxcSkJQb3J0YWxcXEpCRnJvbnRlbmRcXEpCUG9ydGFsRnJvbnRlbmQvc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFBK0Isc0JBQUE7QUNFakM7QURDQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0VEQUE7SUFDRSxVQUFBO0VDRUY7QUFDRjtBRFJBO0VBQ0U7SUFDRSxVQUFBO0VDRUY7RURBQTtJQUNFLFVBQUE7RUNFRjtBQUNGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsbUJBQUE7QUNDRjtBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtEQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0FDQ0o7QURHQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FDQUY7QURFRTtFQUNFLHlCQUFBO0FDQUo7QURHRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNESjtBREtBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQ0ZGO0FESUU7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNGSjtFRElFO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ0ZKO0FBQ0Y7QURKRTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0ZKO0VESUU7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDRko7QUFDRjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0hKO0FETUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSko7QURRQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRE9FO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUFBLCtCQUFBO0VBQUEsNERBQUE7QUNMSjtBRE9JO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ0xOO0FEVUEsc0JBQUE7QUFDQTtFQUNFO0lBQ0UsYUFBQTtFQ1BGOztFRFdBO0lBQ0UsZUFBQTtFQ1JGOztFRFdBO0lBQ0UsaUJBQUE7SUFDQSxhQUFBO0VDUkY7O0VEV0E7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUNSRjs7RURXQTtJQUNFLGlCQUFBO0VDUkY7O0VEV0E7SUFDRSxrQkFBQTtFQ1JGOztFRFdBO0lBQ0UsYUFBQTtFQ1JGO0FBQ0Y7QURXQTtFQUNFO0lBQ0UsYUFBQTtFQ1RGOztFRFlBO0lBQ0UsaUJBQUE7RUNURjs7RURZQTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtFQ1RGOztFRFlBO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0VDVEY7O0VEWUE7SUFDRSxpQkFBQTtFQ1RGOztFRFlBO0lBQ0Usa0JBQUE7RUNURjs7RURZQTtJQUNFLGFBQUE7RUNURjtBQUNGO0FEV0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FDVEY7QURZRTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVEQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHbG9iYWwgU3R5bGVzIGZvciBDb250YWN0IENvbXBvbmVudCAqL1xyXG4uY29udGFjdC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2Utb3V0OyAvKiBGYWRlLWluIGFuaW1hdGlvbiAqL1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBjb2xvcjogIzM0NDk1ZTtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYmRjM2M3O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM0OThkYjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjMpO1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNztcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY29tcGFueS1pbmZvIHtcclxuICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGFuaW1hdGlvbjogc2xpZGVJbiAxcyBlYXNlLW91dDtcclxuXHJcbiAgQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gIH1cclxufVxyXG5cclxuLm1hcC1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpZnJhbWUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFjdC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB9XHJcblxyXG4gIC5jb21wYW55LWluZm8gaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuY29tcGFueS1pbmZvIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIH1cclxuXHJcbiAgLm1hcC1jb250YWluZXIgaWZyYW1lIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuY29udGFjdC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY29tcGFueS1pbmZvIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbXBhbnktaW5mbyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICB9XHJcblxyXG4gIC5tYXAtY29udGFpbmVyIGlmcmFtZSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxufVxyXG4uY3VzdG9tLWhyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIG1hcmdpbjogNDBweCAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlOyAvLyBTbW9vdGggdHJhbnNpdGlvbiBmb3IgdGhlIGxpbmUgY29sb3JcclxuICBcclxuICAvLyBUaGUgdGV4dCBjb250ZW50IGluIHRoZSBtaWRkbGUgb2YgdGhlIGxpbmVcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdPdXIgTG9jYXRpb24nOyAvLyBSZXBsYWNlIHdpdGggZHluYW1pYyB0ZXh0IGlmIG5lZWRlZFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTRweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlOyAvLyBTbW9vdGggdHJhbnNpdGlvbiBmb3IgdGV4dCBhbmQgYmFja2dyb3VuZFxyXG4gIH1cclxufSIsIi8qIEdsb2JhbCBTdHlsZXMgZm9yIENvbnRhY3QgQ29tcG9uZW50ICovXG4uY29udGFjdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2Utb3V0O1xuICAvKiBGYWRlLWluIGFuaW1hdGlvbiAqL1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjMzQ0OTVlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2JkYzNjNztcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbn1cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzM0OThkYjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEycHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcbn1cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzc7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5jb21wYW55LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDFzIGVhc2Utb3V0O1xufVxuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG4uY29tcGFueS1pbmZvIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY29tcGFueS1pbmZvIHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjN2Y4YzhkO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4ubWFwLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXAtY29udGFpbmVyIGlmcmFtZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4ubWFwLWNvbnRhaW5lciBpZnJhbWU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxuXG4gIC5jb21wYW55LWluZm8gaDMge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgLmNvbXBhbnktaW5mbyBwIHtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gIH1cblxuICAubWFwLWNvbnRhaW5lciBpZnJhbWUge1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGFjdC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cblxuICBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuY29tcGFueS1pbmZvIGgzIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuXG4gIC5jb21wYW55LWluZm8gcCB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG5cbiAgLm1hcC1jb250YWluZXIgaWZyYW1lIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG59XG4uY3VzdG9tLWhyIHtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBtYXJnaW46IDQwcHggMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XG59XG4uY3VzdG9tLWhyOmFmdGVyIHtcbiAgY29udGVudDogXCJPdXIgTG9jYXRpb25cIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE0cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM3ZjhjOGQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    onSubmit(form) {
        if (form.valid) {
            console.log('Form Submitted!', form.value);
            // You can handle the form submission here (e.g., send data to a server)
        }
        else {
            console.log('Form is not valid');
        }
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100vh;\n  background-color: #f4f6f8;\n}\n\n.sidebar {\n  width: 350px;\n  background-color: #3f51b5;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n  transition: width 0.3s ease-in-out, -webkit-transform 0.3s ease;\n  transition: width 0.3s ease-in-out, transform 0.3s ease;\n  transition: width 0.3s ease-in-out, transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n\n.sidebar .sidebar-content {\n  -webkit-animation: fadeIn 0.5s ease forwards;\n          animation: fadeIn 0.5s ease forwards;\n}\n\n.sidebar .sidebar-content h2 {\n  font-size: 1.5em;\n  margin-bottom: 20px;\n  color: #fff;\n}\n\n.sidebar .sidebar-content button {\n  color: white;\n  font-size: 1em;\n  text-align: left;\n  padding: 10px;\n  width: 100%;\n  justify-content: flex-start;\n}\n\n.sidebar .sidebar-content button:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.main-content {\n  padding: 20px;\n}\n\n.sidebar-toggle {\n  position: fixed;\n  top: 10px;\n  left: 10px;\n  color: #3f51b5;\n  z-index: 1;\n}\n\n.dashboard-container {\n  max-width: 1200px;\n  margin: auto;\n}\n\n.dashboard-container .dashboard-header {\n  text-align: center;\n  margin-bottom: 20px;\n  color: #3f51b5;\n}\n\n.dashboard-container .dashboard-header h1 {\n  margin: 0;\n  -webkit-animation: slideInDown 0.6s ease;\n          animation: slideInDown 0.6s ease;\n}\n\n.dashboard-container .dashboard-header p {\n  font-size: 1.1em;\n  color: #666;\n}\n\n.dashboard-container .dashboard-content {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n\n.dashboard-container .dashboard-content mat-card {\n  padding: 20px;\n  border-radius: 8px;\n  background-color: white;\n  color: black;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n.dashboard-container .dashboard-content mat-card.animate-card {\n  transition: box-shadow 0.3s ease, -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, -webkit-transform 0.3s ease;\n}\n\n.dashboard-container .dashboard-content mat-card.animate-card:hover {\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n}\n\n.dashboard-container table {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.dashboard-container table th {\n  background: #3f51b5;\n  color: white;\n  text-align: left;\n  padding: 10px;\n}\n\n.dashboard-container table td {\n  padding: 10px;\n  border-bottom: 1px solid #ddd;\n  color: black;\n}\n\n.dashboard-container table tr:hover {\n  background-color: #f1f1f1;\n  transition: background-color 0.3s ease;\n}\n\n/* Responsive Styles */\n\n@media (max-width: 768px) {\n  .sidebar {\n    width: 70%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: auto;\n    z-index: 1000;\n  }\n\n  .sidenav-container {\n    flex-direction: column;\n  }\n\n  .sidebar-toggle {\n    display: block;\n    position: fixed;\n    top: 15px;\n    left: 15px;\n  }\n\n  .dashboard-container {\n    padding-top: 70px;\n    /* To prevent content overlap with fixed header */\n  }\n\n  .dashboard-content {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n\n  table {\n    display: block;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n}\n\n@media (max-width: 480px) {\n  .dashboard-header h1 {\n    font-size: 1.5em;\n  }\n\n  .dashboard-header p {\n    font-size: 1em;\n  }\n\n  mat-card {\n    padding: 15px;\n  }\n\n  .sidebar-content h2 {\n    font-size: 1.3em;\n  }\n\n  .sidebar-toggle {\n    top: 10px;\n    left: 10px;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes scaleUp {\n  from {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes scaleUp {\n  from {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxKQlBvcnRhbFxcSkJGcm9udGVuZFxcSkJQb3J0YWxGcm9udGVuZC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSwrREFBQTtFQUFBLHVEQUFBO0VBQUEsb0ZBQUE7QUNDRjs7QURDRTtFQUNFLDRDQUFBO1VBQUEsb0NBQUE7QUNDSjs7QURBSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDRU47O0FEQ0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ0NOOztBRENNO0VBQ0UsMENBQUE7QUNDUjs7QURLQTtFQUNFLGFBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNGRjs7QURJRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRko7O0FESUk7RUFDRSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0ZOOztBRE1JO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDSk47O0FEUUU7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0FDTko7O0FEUUk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQ05OOztBRFFNO0VBQ0UsNkRBQUE7RUFBQSxxREFBQTtFQUFBLGtGQUFBO0FDTlI7O0FEUVE7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EseUNBQUE7QUNOVjs7QURZRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRFlJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDVk47O0FEYUk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FDWE47O0FEY0k7RUFDRSx5QkFBQTtFQUNBLHNDQUFBO0FDWk47O0FEZ0JBLHNCQUFBOztBQUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUNiRjs7RURnQkE7SUFDRSxzQkFBQTtFQ2JGOztFRGdCQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUNiRjs7RURnQkE7SUFDRSxpQkFBQTtJQUFtQixpREFBQTtFQ1pyQjs7RURlQTtJQUNFLDBCQUFBO0lBQ0EsU0FBQTtFQ1pGOztFRGVBO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNaRjtBQUNGOztBRGVBO0VBQ0U7SUFDRSxnQkFBQTtFQ2JGOztFRGdCQTtJQUNFLGNBQUE7RUNiRjs7RURnQkE7SUFDRSxhQUFBO0VDYkY7O0VEZ0JBO0lBQ0UsZ0JBQUE7RUNiRjs7RURnQkE7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQ2JGO0FBQ0Y7O0FEZUE7RUFDRTtJQUNFLFVBQUE7RUNiRjtFRGVBO0lBQ0UsVUFBQTtFQ2JGO0FBQ0Y7O0FET0E7RUFDRTtJQUNFLFVBQUE7RUNiRjtFRGVBO0lBQ0UsVUFBQTtFQ2JGO0FBQ0Y7O0FEZ0JBO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0lBQ0EsVUFBQTtFQ2RGO0VEZ0JBO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtJQUNBLFVBQUE7RUNkRjtBQUNGOztBRE1BO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0lBQ0EsVUFBQTtFQ2RGO0VEZ0JBO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtJQUNBLFVBQUE7RUNkRjtBQUNGOztBRGlCQTtFQUNFO0lBQ0UsOEJBQUE7WUFBQSxzQkFBQTtJQUNBLFVBQUE7RUNmRjtFRGlCQTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxVQUFBO0VDZkY7QUFDRjs7QURPQTtFQUNFO0lBQ0UsOEJBQUE7WUFBQSxzQkFBQTtJQUNBLFVBQUE7RUNmRjtFRGlCQTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxVQUFBO0VDZkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmODtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAuc2lkZWJhci1jb250ZW50IHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZSBmb3J3YXJkcztcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnNpZGViYXItdG9nZ2xlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6ICMzZjUxYjU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgLmRhc2hib2FyZC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiAjM2Y1MWI1O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBhbmltYXRpb246IHNsaWRlSW5Eb3duIDAuNnMgZWFzZTsgLy8gU2xpZGUtaW4gYW5pbWF0aW9uXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICBjb2xvcjogIzY2NjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kYXNoYm9hcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDIwcHg7XHJcblxyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAgICAgJi5hbmltYXRlLWNhcmQge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHRyOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICB9XHJcblxyXG4gIC5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXItdG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4gIC5kYXNoYm9hcmQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4OyAvKiBUbyBwcmV2ZW50IGNvbnRlbnQgb3ZlcmxhcCB3aXRoIGZpeGVkIGhlYWRlciAqL1xyXG4gIH1cclxuXHJcbiAgLmRhc2hib2FyZC1jb250ZW50IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgdGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5kYXNoYm9hcmQtaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG5cclxuICAuZGFzaGJvYXJkLWhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLWNvbnRlbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLXRvZ2dsZSB7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gIH1cclxufS8vIEtleWZyYW1lcyBmb3IgYW5pbWF0aW9uc1xyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2NhbGVVcCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59IiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmODtcbn1cblxuLnNpZGViYXIge1xuICB3aWR0aDogMzUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4uc2lkZWJhciAuc2lkZWJhci1jb250ZW50IHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlIGZvcndhcmRzO1xufVxuLnNpZGViYXIgLnNpZGViYXItY29udGVudCBoMiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNpZGViYXIgLnNpZGViYXItY29udGVudCBidXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnNpZGViYXIgLnNpZGViYXItY29udGVudCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2lkZWJhci10b2dnbGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICMzZjUxYjU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogIzNmNTFiNTtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5kYXNoYm9hcmQtaGVhZGVyIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBhbmltYXRpb246IHNsaWRlSW5Eb3duIDAuNnMgZWFzZTtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5kYXNoYm9hcmQtaGVhZGVyIHAge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjb2xvcjogIzY2Njtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIC5kYXNoYm9hcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciAuZGFzaGJvYXJkLWNvbnRlbnQgbWF0LWNhcmQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmRhc2hib2FyZC1jb250YWluZXIgLmRhc2hib2FyZC1jb250ZW50IG1hdC1jYXJkLmFuaW1hdGUtY2FyZCB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xufVxuLmRhc2hib2FyZC1jb250YWluZXIgLmRhc2hib2FyZC1jb250ZW50IG1hdC1jYXJkLmFuaW1hdGUtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmRhc2hib2FyZC1jb250YWluZXIgdGFibGUgdGgge1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciB0YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBjb2xvcjogYmxhY2s7XG59XG4uZGFzaGJvYXJkLWNvbnRhaW5lciB0YWJsZSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuXG4gIC5zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5zaWRlYmFyLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiAxNXB4O1xuICB9XG5cbiAgLmRhc2hib2FyZC1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgIC8qIFRvIHByZXZlbnQgY29udGVudCBvdmVybGFwIHdpdGggZml4ZWQgaGVhZGVyICovXG4gIH1cblxuICAuZGFzaGJvYXJkLWNvbnRlbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMTVweDtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZGFzaGJvYXJkLWhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxuXG4gIC5kYXNoYm9hcmQtaGVhZGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG5cbiAgbWF0LWNhcmQge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAuc2lkZWJhci1jb250ZW50IGgyIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICB9XG5cbiAgLnNpZGViYXItdG9nZ2xlIHtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzY2FsZVVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DashboardComponent = class DashboardComponent {
    constructor(router) {
        this.router = router;
        this.userName = '';
        this.jobs = []; // Mock data for jobs
        this.applications = []; // Mock data for applications
        this.messages = []; // Mock data for messages
        this.displayedColumns = ['jobTitle', 'status', 'actions'];
    }
    navigateTo(route) {
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
    applyToJob(jobId) {
        // Handle job application logic
    }
    viewApplication(applicationId) {
        // Handle viewing application details
    }
    viewMessage(messageId) {
        // Handle viewing message
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-toolbar {\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n  /* Ensures it stays on top of other elements */\n  background-color: #3f51b5;\n  /* Adjust color as needed */\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  /* Optional: for a shadow effect */\n  padding: 10px 20px;\n  /* Adjust padding as necessary */\n}\n.custom-toolbar .logo img {\n  height: 60px;\n  width: 80px;\n  border-radius: 5px;\n}\n.custom-toolbar .spacer {\n  flex: 1 1 auto;\n}\n.custom-toolbar .menu-button {\n  display: none;\n}\n.custom-toolbar .desktop-nav {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n}\n.custom-toolbar .desktop-nav > .nav-button {\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .custom-toolbar .desktop-nav {\n    display: none;\n  }\n  .custom-toolbar .menu-button {\n    display: block;\n  }\n}\n::ng-deep .mat-toolbar.mat-primary {\n  background-color: #0047AB;\n}\n.nav-button {\n  margin: 20px;\n  background-color: #3498db;\n  color: white;\n}\n.nav-button:hover {\n  background-color: #2980b9;\n}\n.progress-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background-color: rgba(255, 255, 255, 0.2);\n  /* Light background */\n  overflow: hidden;\n}\n.progress-container .progress-bar {\n  height: 100%;\n  width: 0;\n  background-color: #ff4081;\n  /* Color for the progress */\n  transition: width 0.25s ease;\n}\n.custom-hr {\n  border: none;\n  text-align: center;\n  overflow: visible;\n  margin: 40px 0;\n  height: 1px;\n  background-color: #bdc3c7;\n  position: relative;\n  transition: background-color 0.4s ease;\n}\n.custom-hr:after {\n  content: \"About\";\n  display: inline-block;\n  position: relative;\n  top: -14px;\n  padding: 0 10px;\n  background: white;\n  font-size: 16px;\n  color: #7f8c8d;\n  transition: color 0.4s ease, background-color 0.4s ease;\n}\n.custom-hr:hover {\n  background-color: #3498db;\n  color: black;\n}\n.custom-hr:hover:after {\n  color: #2980b9;\n  background-color: #ecf0f1;\n}\n.custom-hr-contact {\n  border: none;\n  text-align: center;\n  overflow: visible;\n  margin: 40px 0;\n  height: 1px;\n  background-color: #bdc3c7;\n  position: relative;\n  transition: background-color 0.4s ease;\n}\n.custom-hr-contact:after {\n  content: \"Contact\";\n  display: inline-block;\n  position: relative;\n  top: -14px;\n  padding: 0 10px;\n  background: white;\n  font-size: 16px;\n  color: #7f8c8d;\n  transition: color 0.4s ease, background-color 0.4s ease;\n}\n.custom-hr-contact:hover {\n  background-color: #3498db;\n  color: black;\n}\n.custom-hr-contact:hover:after {\n  color: #2980b9;\n  background-color: #ecf0f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcSkJQb3J0YWxcXEpCRnJvbnRlbmRcXEpCUG9ydGFsRnJvbnRlbmQvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUFlLDhDQUFBO0VBQ2YseUJBQUE7RUFBMkIsMkJBQUE7RUFDM0Isd0NBQUE7RUFBMEMsa0NBQUE7RUFDMUMsa0JBQUE7RUFBb0IsZ0NBQUE7QUNLdEI7QURISTtFQUVDLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNJTDtBREFFO0VBQ0UsY0FBQTtBQ0VKO0FEQ0U7RUFDRSxhQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUNBSjtBREdJO0VBQ0UsY0FBQTtBQ0ROO0FES0U7RUFDRTtJQUNFLGFBQUE7RUNISjtFRE1FO0lBQ0UsY0FBQTtFQ0pKO0FBQ0Y7QURPQTtFQUNBLHlCQUFBO0FDSkE7QURNQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNIRjtBRElFO0VBQ0UseUJBQUE7QUNGSjtBREtBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFBNEMscUJBQUE7RUFDNUMsZ0JBQUE7QUNERjtBREdFO0VBQ0UsWUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUEyQiwyQkFBQTtFQUMzQiw0QkFBQTtBQ0FKO0FER0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FDQUY7QURHRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVEQUFBO0FDREo7QURLRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0hKO0FESUk7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUNGTjtBRE9BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQ0pGO0FET0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx1REFBQTtBQ0xKO0FEU0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNQSjtBRFFJO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FDTk4iLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXRvb2xiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZXMgaXQgc3RheXMgb24gdG9wIG9mIG90aGVyIGVsZW1lbnRzICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgLyogQWRqdXN0IGNvbG9yIGFzIG5lZWRlZCAqL1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIE9wdGlvbmFsOiBmb3IgYSBzaGFkb3cgZWZmZWN0ICovXHJcbiAgcGFkZGluZzogMTBweCAyMHB4OyAvKiBBZGp1c3QgcGFkZGluZyBhcyBuZWNlc3NhcnkgKi9cclxuICAubG9nbyB7XHJcbiAgICBpbWcge1xyXG4gICAgICBcclxuICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bzsgLy8gVGFrZSB1cCByZW1haW5pbmcgc3BhY2VcclxuICB9XHJcblxyXG4gIC5tZW51LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvLyBIaWRlIG9uIGxhcmdlciBzY3JlZW5zXHJcbiAgfVxyXG5cclxuICAuZGVza3RvcC1uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDsgLy8gU2hvdyBuYXZpZ2F0aW9uIGl0ZW1zXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvLyBBbGlnbiBidXR0b25zIHRvIHRoZSByaWdodFxyXG4gICAgZ2FwOiAxNnB4OyAvLyBPcHRpb25hbDogQWRkIHNwYWNlIGJldHdlZW4gYnV0dG9uc1xyXG5cclxuICAgIC8vIENlbnRlciB0aGUgcm91dGVyIGxpbmtzXHJcbiAgICAmID4gLm5hdi1idXR0b24ge1xyXG4gICAgICBtYXJnaW46IDAgYXV0bzsgLy8gQ2VudGVyIHRoZSBidXR0b25zIGluIHRoZSBzcGFjZSB0aGV5IG9jY3VweVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZGVza3RvcC1uYXYge1xyXG4gICAgICBkaXNwbGF5OiBub25lOyAvLyBIaWRlIG5hdmlnYXRpb24gaXRlbXMgb24gbW9iaWxlXHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7IC8vIFNob3cgbWVudSBidXR0b24gb24gbW9iaWxlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjo6bmctZGVlcCAubWF0LXRvb2xiYXIubWF0LXByaW1hcnl7XHJcbmJhY2tncm91bmQtY29sb3I6ICMwMDQ3QUI7XHJcbn1cclxuLm5hdi1idXR0b24ge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XHJcbiAgfVxyXG59XHJcbi5wcm9ncmVzcy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7IC8qIExpZ2h0IGJhY2tncm91bmQgKi9cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIFxyXG4gIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOyAvKiBDb2xvciBmb3IgdGhlIHByb2dyZXNzICovXHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cyBlYXNlO1xyXG4gIH1cclxufVxyXG4uY3VzdG9tLWhyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIG1hcmdpbjogNDBweCAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlOyAvLyBTbW9vdGggdHJhbnNpdGlvbiBmb3IgdGhlIGxpbmUgY29sb3JcclxuICBcclxuICAvLyBUaGUgdGV4dCBjb250ZW50IGluIHRoZSBtaWRkbGUgb2YgdGhlIGxpbmVcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdBYm91dCc7IC8vIFJlcGxhY2Ugd2l0aCBkeW5hbWljIHRleHQgaWYgbmVlZGVkXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xNHB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzdmOGM4ZDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7IC8vIFNtb290aCB0cmFuc2l0aW9uIGZvciB0ZXh0IGFuZCBiYWNrZ3JvdW5kXHJcbiAgfVxyXG5cclxuICAvLyBIb3ZlciBlZmZlY3QgZm9yIHRoZSBsaW5lIGFuZCB0aGUgdGV4dFxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjsgLy8gTGluZSBjaGFuZ2VzIHRvIGJsdWUgb24gaG92ZXJcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb2xvcjogIzI5ODBiOTsgLy8gVGV4dCBjaGFuZ2VzIHRvIGEgZGFya2VyIGJsdWVcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTsgLy8gQmFja2dyb3VuZCBjaGFuZ2VzIHRvIGEgbGlnaHRlciBjb2xvciB0byBjb250cmFzdCB0aGUgdGV4dFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmN1c3RvbS1oci1jb250YWN0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIG1hcmdpbjogNDBweCAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlOyAvLyBTbW9vdGggdHJhbnNpdGlvbiBmb3IgdGhlIGxpbmUgY29sb3JcclxuICBcclxuICAvLyBUaGUgdGV4dCBjb250ZW50IGluIHRoZSBtaWRkbGUgb2YgdGhlIGxpbmVcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdDb250YWN0JzsgLy8gUmVwbGFjZSB3aXRoIGR5bmFtaWMgdGV4dCBpZiBuZWVkZWRcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTE0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjN2Y4YzhkO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC40cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTsgLy8gU21vb3RoIHRyYW5zaXRpb24gZm9yIHRleHQgYW5kIGJhY2tncm91bmRcclxuICB9XHJcblxyXG4gIC8vIEhvdmVyIGVmZmVjdCBmb3IgdGhlIGxpbmUgYW5kIHRoZSB0ZXh0XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiOyAvLyBMaW5lIGNoYW5nZXMgdG8gYmx1ZSBvbiBob3ZlclxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbG9yOiAjMjk4MGI5OyAvLyBUZXh0IGNoYW5nZXMgdG8gYSBkYXJrZXIgYmx1ZVxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxOyAvLyBCYWNrZ3JvdW5kIGNoYW5nZXMgdG8gYSBsaWdodGVyIGNvbG9yIHRvIGNvbnRyYXN0IHRoZSB0ZXh0XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG4vLyAjYWJvdXQge1xyXG4vLyAgIHBhZGRpbmc6IDUwcHg7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcclxuLy8gfVxyXG4iLCIuY3VzdG9tLXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbiAgLyogRW5zdXJlcyBpdCBzdGF5cyBvbiB0b3Agb2Ygb3RoZXIgZWxlbWVudHMgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgLyogQWRqdXN0IGNvbG9yIGFzIG5lZWRlZCAqL1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAvKiBPcHRpb25hbDogZm9yIGEgc2hhZG93IGVmZmVjdCAqL1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIC8qIEFkanVzdCBwYWRkaW5nIGFzIG5lY2Vzc2FyeSAqL1xufVxuLmN1c3RvbS10b29sYmFyIC5sb2dvIGltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jdXN0b20tdG9vbGJhciAuc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uY3VzdG9tLXRvb2xiYXIgLm1lbnUtYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jdXN0b20tdG9vbGJhciAuZGVza3RvcC1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDE2cHg7XG59XG4uY3VzdG9tLXRvb2xiYXIgLmRlc2t0b3AtbmF2ID4gLm5hdi1idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY3VzdG9tLXRvb2xiYXIgLmRlc2t0b3AtbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jdXN0b20tdG9vbGJhciAubWVudS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbjo6bmctZGVlcCAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0N0FCO1xufVxuXG4ubmF2LWJ1dHRvbiB7XG4gIG1hcmdpbjogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5hdi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xufVxuXG4ucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAvKiBMaWdodCBiYWNrZ3JvdW5kICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZ3Jlc3MtY29udGFpbmVyIC5wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xuICAvKiBDb2xvciBmb3IgdGhlIHByb2dyZXNzICovXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzIGVhc2U7XG59XG5cbi5jdXN0b20taHIge1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG1hcmdpbjogNDBweCAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbn1cbi5jdXN0b20taHI6YWZ0ZXIge1xuICBjb250ZW50OiBcIkFib3V0XCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjN2Y4YzhkO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xufVxuLmN1c3RvbS1ocjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5jdXN0b20taHI6aG92ZXI6YWZ0ZXIge1xuICBjb2xvcjogIzI5ODBiOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcbn1cblxuLmN1c3RvbS1oci1jb250YWN0IHtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBtYXJnaW46IDQwcHggMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XG59XG4uY3VzdG9tLWhyLWNvbnRhY3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIkNvbnRhY3RcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE0cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM3ZjhjOGQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XG59XG4uY3VzdG9tLWhyLWNvbnRhY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xuICBjb2xvcjogYmxhY2s7XG59XG4uY3VzdG9tLWhyLWNvbnRhY3Q6aG92ZXI6YWZ0ZXIge1xuICBjb2xvcjogIzI5ODBiOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcbn0iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let HomeComponent = class HomeComponent {
    constructor(dialog, router, snackBar) {
        this.dialog = dialog;
        this.router = router;
        this.snackBar = snackBar;
        this.isLoggedIn = false; // Track login state
        this.isMenuOpen = false;
        this.a = "\assets\images\cross.png";
        this.scrollProgress = 0;
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    onWindowScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        this.scrollProgress = (scrollTop / docHeight) * 100;
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
        if (!this.isLoggedIn) {
            // Open the login dialog only if not logged in
            this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], {
                width: '400px',
                height: 'auto',
                disableClose: false,
            }).afterClosed().subscribe(result => {
                this.checkLoginStatus();
            });
        }
    }
    logout() {
        localStorage.removeItem('token'); // Remove token
        localStorage.removeItem('userName'); // Remove token
        this.isLoggedIn = false; // Update login state
        this.router.navigate(['/']); // Optionally navigate to home or login page
        // Show success popup message
        this.snackBar.open('Logout successful!', 'Close', {
            duration: 3000,
            panelClass: ['success-snack-bar'],
        });
    }
    openSignupDialog() {
        this.dialog.open(_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], {
            width: '500px',
            height: 'auto',
            disableClose: false,
        });
    }
    ngOnInit() {
        this.checkLoginStatus();
    }
    checkLoginStatus() {
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
};
HomeComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HomeComponent.prototype, "onWindowScroll", null);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/jbcard/jbcard.component.scss":
/*!**********************************************!*\
  !*** ./src/app/jbcard/jbcard.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  justify-content: center;\n}\n\n.example-card {\n  width: 400px;\n  margin: 8px;\n  display: flex;\n  background-color: #0096FF;\n  flex-direction: column;\n  transition: box-shadow 0.3s ease, -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, -webkit-transform 0.3s ease;\n}\n\n.example-card:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);\n}\n\nmat-card {\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\nmat-card-content {\n  text-align: center;\n}\n\n.custom-hr {\n  border: none;\n  text-align: center;\n  overflow: visible;\n  margin: 40px 0;\n  height: 1px;\n  background-color: #bdc3c7;\n  position: relative;\n  transition: background-color 0.4s ease;\n}\n\n.custom-hr:after {\n  content: \"Our Services\";\n  display: inline-block;\n  position: relative;\n  top: -14px;\n  padding: 0 10px;\n  background: white;\n  font-size: 16px;\n  color: #7f8c8d;\n  transition: color 0.4s ease, background-color 0.4s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvamJjYXJkL0Q6XFxKQlBvcnRhbFxcSkJGcm9udGVuZFxcSkJQb3J0YWxGcm9udGVuZC9zcmNcXGFwcFxcamJjYXJkXFxqYmNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2piY2FyZC9qYmNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZEQUFBO0VBQUEscURBQUE7RUFBQSxrRkFBQTtBQ0NGOztBRENFO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO0FDQ0o7O0FER0E7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQ0VGOztBRENFO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdURBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2piY2FyZC9qYmNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogNDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZGRjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IC8vIFNsaWdodGx5IHNjYWxlIHVwIG9uIGhvdmVyXHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBTdHJvbmdlciBzaGFkb3cgb24gaG92ZXJcclxuICB9XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jdXN0b20taHIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7IC8vIFNtb290aCB0cmFuc2l0aW9uIGZvciB0aGUgbGluZSBjb2xvclxyXG4gIFxyXG4gIC8vIFRoZSB0ZXh0IGNvbnRlbnQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgbGluZVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ091ciBTZXJ2aWNlcyc7IC8vIFJlcGxhY2Ugd2l0aCBkeW5hbWljIHRleHQgaWYgbmVlZGVkXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xNHB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzdmOGM4ZDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7IC8vIFNtb290aCB0cmFuc2l0aW9uIGZvciB0ZXh0IGFuZCBiYWNrZ3JvdW5kXHJcbiAgfVxyXG59IiwiLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZGRjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG59XG4uZXhhbXBsZS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxubWF0LWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmN1c3RvbS1ociB7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjM2M3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xufVxuLmN1c3RvbS1ocjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiT3VyIFNlcnZpY2VzXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjN2Y4YzhkO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xufSJdfQ== */"

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
                link: '/app-resume'
            },
            {
                title: 'Job Search',
                subtitle: 'Find your future',
                description: 'Best place for job search.',
                image: './assets/images/naukri.jpg',
                link: 'https://example.com/page2'
            },
            {
                title: 'Job Interview',
                subtitle: 'Check your skills',
                description: 'Check your mirror image.',
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

module.exports = "::ng-deep .mat-dialog-container {\n  background: #fff;\n  color: #000000;\n}\n\n:host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n:host mat-dialog-content {\n  width: 100%;\n  padding: 16px;\n  -webkit-animation: fadeIn 0.3s ease-in-out;\n          animation: fadeIn 0.3s ease-in-out;\n}\n\n:host mat-dialog-content form {\n  display: flex;\n  flex-direction: column;\n}\n\n:host mat-dialog-content form mat-form-field {\n  margin-bottom: 16px;\n  width: 100%;\n}\n\n:host mat-dialog-content form mat-form-field mat-label {\n  font-weight: bold;\n}\n\n:host mat-dialog-actions {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n:host mat-dialog-actions button {\n  flex: 1;\n  margin: 0 8px;\n}\n\n:host mat-dialog-actions button:hover {\n  background-color: #007bff;\n  transition: background-color 0.3s ease;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXEpCUG9ydGFsXFxKQkZyb250ZW5kXFxKQlBvcnRhbEZyb250ZW5kL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUUsZ0JBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FER0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNETjs7QURHTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0RSOztBREdRO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDRFY7O0FER1U7RUFDRSxpQkFBQTtBQ0RaOztBRE9JO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0xOOztBRE9NO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUNMUjs7QURPUTtFQUNFLHlCQUFBO0VBQ0Esc0NBQUE7QUNMVjs7QURZRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNUSjtFRFdFO0lBQ0UsVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUNUSjtBQUNGOztBRENFO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ1RKO0VEV0U7SUFDRSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFQ1RKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxvZ2luLWRpYWxvZy5jb21wb25lbnQuc2Nzc1xyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBcclxuICBiYWNrZ3JvdW5kOiAjZmZmOyBcclxuICBjb2xvcjogIzAwMDAwMDsgXHJcbiAgXHJcbn1cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMTAwJTsgLy8gRnVsbCB3aWR0aCBmb3IgcmVzcG9uc2l2ZW5lc3NcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLWluLW91dDsgLy8gQW5pbWF0aW9uIGVmZmVjdCBvbiBvcGVuXHJcbiAgXHJcbiAgICAgIGZvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBcclxuICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4OyAvLyBTcGFjaW5nIGJldHdlZW4gZmllbGRzXHJcbiAgICAgICAgICB3aWR0aDogMTAwJTsgLy8gRnVsbCB3aWR0aCBmb3IgZmllbGRzXHJcbiAgXHJcbiAgICAgICAgICBtYXQtbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgLy8gRW1waGFzaXplIGxhYmVsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBtYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlOyAvLyBGdWxsIHdpZHRoIGZvciBidXR0b25zXHJcbiAgXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZmxleDogMTsgLy8gRXF1YWwgd2lkdGggZm9yIGJ1dHRvbnNcclxuICAgICAgICBtYXJnaW46IDAgOHB4OyAvLyBNYXJnaW4gYmV0d2VlbiBidXR0b25zXHJcbiAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyAvLyBMaWdodCBob3ZlciBlZmZlY3RcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlOyAvLyBTbW9vdGggdHJhbnNpdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBBbmltYXRpb24ga2V5ZnJhbWVzXHJcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCBtYXQtZGlhbG9nLWNvbnRlbnQgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCBtYXQtZGlhbG9nLWNvbnRlbnQgZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWF0LWRpYWxvZy1jb250ZW50IGZvcm0gbWF0LWZvcm0tZmllbGQgbWF0LWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46aG9zdCBtYXQtZGlhbG9nLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgbWF0LWRpYWxvZy1hY3Rpb25zIGJ1dHRvbiB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMCA4cHg7XG59XG46aG9zdCBtYXQtZGlhbG9nLWFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let LoginComponent = class LoginComponent {
    constructor(fb, http, router, dialogRef, snackBar) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.token = "";
        // Initialize the form with validation
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]] // Password validation
        });
    }
    ngOnInit() {
    }
    onLogin() {
        console.log('Login method called'); // Debug log
        if (this.loginForm.valid) {
            const formData = this.loginForm.value; // Get form data
            console.log('Login Data:', formData); // Log data to console
            // Create headers and add Authorization if needed
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            const token = localStorage.getItem('token'); // Retrieve token from local storage if it exists
            if (token) {
                headers = headers.set('Authorization', `Bearer ${token}`); // Set Authorization header with 'Bearer'
            }
            // Call the login API
            this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].backendurl}/login`, formData, { headers, observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
                console.error('Login error', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); // Handle the error as needed
            }))
                .subscribe(response => {
                console.log('Login successful:', response);
                // Get the new token from the response body
                const newToken = response.body.token;
                const userName = response.body.user.name; // Get user's name from response
                if (newToken) {
                    // Store the token in local storage
                    localStorage.setItem('token', newToken);
                    localStorage.setItem('userName', userName); // Save user name
                    localStorage.setItem('tokenTimestamp', Date.now().toString());
                    console.log('Token stored in local storage:', newToken);
                }
                // Show success popup message
                this.snackBar.open('Login successful!', 'Close', {
                    duration: 3000,
                    panelClass: ['success-snack-bar'],
                });
                this.dialogRef.close();
                // Handle successful login response (e.g., navigate to dashboard)
                this.router.navigate(['/dashboard']);
            });
        }
        else {
            console.log('Form is invalid');
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-container {\n  max-width: 600px;\n  margin: 40px auto;\n  padding: 20px;\n  background-color: #ffffff;\n  color: black;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  -webkit-animation: fadeIn 0.6s ease-in-out;\n          animation: fadeIn 0.6s ease-in-out;\n}\n@media (max-width: 768px) {\n  .profile-container {\n    padding: 10px;\n    max-width: 90%;\n  }\n}\n.profile-container .back-button {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  color: black;\n  transition: color 0.3s ease;\n}\n.profile-container .back-button:hover {\n  color: #3f51b5;\n}\n@media (max-width: 768px) {\n  .profile-container .back-button {\n    top: 10px;\n    left: 10px;\n  }\n}\n.profile-container .loading,\n.profile-container .error-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.2em;\n  margin-top: 20px;\n}\n.profile-container .loading mat-spinner,\n.profile-container .error-message mat-spinner {\n  margin-bottom: 10px;\n  -webkit-animation: spinnerRotate 1s linear infinite;\n          animation: spinnerRotate 1s linear infinite;\n}\n.profile-container .loading {\n  color: #3f51b5;\n}\n.profile-container .error-message {\n  color: #e53935;\n}\n.profile-container .profile-content {\n  text-align: center;\n}\n.profile-container .profile-content h1 {\n  margin-bottom: 20px;\n  color: #3f51b5;\n  font-size: 1.8rem;\n  -webkit-animation: slideInDown 0.6s ease;\n          animation: slideInDown 0.6s ease;\n}\n.profile-container .profile-content .profile-details {\n  display: flex;\n  justify-content: center;\n}\n.profile-container .profile-content .profile-details mat-card {\n  width: 100%;\n  max-width: 500px;\n  padding: 20px;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s ease, -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, -webkit-transform 0.3s ease;\n  -webkit-animation: scaleUp 0.5s ease;\n          animation: scaleUp 0.5s ease;\n}\n.profile-container .profile-content .profile-details mat-card:hover {\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);\n}\n.profile-container .profile-content .profile-details mat-card mat-card-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #3f51b5;\n}\n.profile-container .profile-content .profile-details mat-card mat-card-title,\n.profile-container .profile-content .profile-details mat-card mat-card-subtitle {\n  font-weight: 500;\n  color: black;\n}\n.profile-container .profile-content .profile-details mat-card mat-card-content p {\n  color: black;\n  font-size: 1em;\n  margin: 10px 0;\n}\n.profile-container .profile-content .profile-details mat-card mat-card-actions {\n  display: flex;\n  justify-content: space-around;\n}\n.profile-container .profile-content .profile-details mat-card mat-card-actions button {\n  transition: background-color 0.3s ease, color 0.3s ease;\n}\n.profile-container .profile-content .profile-details mat-card mat-card-actions button:hover {\n  background-color: #3f51b5;\n  color: white;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes scaleUp {\n  from {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scaleUp {\n  from {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes spinnerRotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spinnerRotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcSkJQb3J0YWxcXEpCRnJvbnRlbmRcXEpCUG9ydGFsRnJvbnRlbmQvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNDSjtBRENJO0VBVko7SUFXTSxhQUFBO0lBQ0EsY0FBQTtFQ0VKO0FBQ0Y7QURDSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNDTjtBRENNO0VBQ0UsY0FBQTtBQ0NSO0FERU07RUFYRjtJQVlJLFNBQUE7SUFDQSxVQUFBO0VDQ047QUFDRjtBREVJOztFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FOO0FERU07O0VBQ0UsbUJBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDQ1I7QURHSTtFQUNFLGNBQUE7QUNETjtBRElJO0VBQ0UsY0FBQTtBQ0ZOO0FES0k7RUFDRSxrQkFBQTtBQ0hOO0FES007RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNIUjtBRE1NO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDSlI7QURNUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSw2REFBQTtFQUFBLHFEQUFBO0VBQUEsa0ZBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDSlY7QURNVTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwwQ0FBQTtBQ0paO0FET1U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNMWjtBRFFVOztFQUVFLGdCQUFBO0VBQ0EsWUFBQTtBQ05aO0FEVVk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNSZDtBRFlVO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FDVlo7QURZWTtFQUNFLHVEQUFBO0FDVmQ7QURZYztFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ1ZoQjtBRG9CRTtFQUNFO0lBQ0UsVUFBQTtFQ2pCSjtFRG1CRTtJQUNFLFVBQUE7RUNqQko7QUFDRjtBRFdFO0VBQ0U7SUFDRSxVQUFBO0VDakJKO0VEbUJFO0lBQ0UsVUFBQTtFQ2pCSjtBQUNGO0FEb0JFO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0lBQ0EsVUFBQTtFQ2xCSjtFRG9CRTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxVQUFBO0VDbEJKO0FBQ0Y7QURVRTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtJQUNBLFVBQUE7RUNsQko7RURvQkU7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0lBQ0EsVUFBQTtFQ2xCSjtBQUNGO0FEcUJFO0VBQ0U7SUFDRSw4QkFBQTtZQUFBLHNCQUFBO0lBQ0EsVUFBQTtFQ25CSjtFRHFCRTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxVQUFBO0VDbkJKO0FBQ0Y7QURXRTtFQUNFO0lBQ0UsOEJBQUE7WUFBQSxzQkFBQTtJQUNBLFVBQUE7RUNuQko7RURxQkU7SUFDRSwyQkFBQTtZQUFBLG1CQUFBO0lBQ0EsVUFBQTtFQ25CSjtBQUNGO0FEc0JFO0VBQ0U7SUFDRSwrQkFBQTtZQUFBLHVCQUFBO0VDcEJKO0VEc0JFO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ3BCSjtBQUNGO0FEY0U7RUFDRTtJQUNFLCtCQUFBO1lBQUEsdUJBQUE7RUNwQko7RURzQkU7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDcEJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNnMgZWFzZS1pbi1vdXQ7IC8vIEZhZGUtaW4gYW5pbWF0aW9uIGZvciB0aGUgZW50aXJlIGNvbnRhaW5lclxyXG4gIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gQmFjayBidXR0b24gd2l0aCBob3ZlciBhbmltYXRpb25cclxuICAgIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5sb2FkaW5nLFxyXG4gICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIFxyXG4gICAgICBtYXQtc3Bpbm5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBhbmltYXRpb246IHNwaW5uZXJSb3RhdGUgMXMgbGluZWFyIGluZmluaXRlOyAvLyBBbmltYXRpb24gZm9yIHJvdGF0aW5nIHNwaW5uZXJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmxvYWRpbmcge1xyXG4gICAgICBjb2xvcjogIzNmNTFiNTtcclxuICAgIH1cclxuICBcclxuICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgY29sb3I6ICNlNTM5MzU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucHJvZmlsZS1jb250ZW50IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBjb2xvcjogIzNmNTFiNTtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICBhbmltYXRpb246IHNsaWRlSW5Eb3duIDAuNnMgZWFzZTsgLy8gU2xpZGUtaW4gYW5pbWF0aW9uIGZvciB0aGUgdGl0bGVcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAucHJvZmlsZS1kZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gICAgICAgIG1hdC1jYXJkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNjYWxlVXAgMC41cyBlYXNlOyAvLyBTY2FsZS11cCBhbmltYXRpb24gZm9yIHRoZSBjYXJkIG9uIGxvYWRcclxuICBcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpOyAvLyBTbGlnaHQgem9vbSBvbiBob3ZlclxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBtYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogIzNmNTFiNTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIG1hdC1jYXJkLXRpdGxlLFxyXG4gICAgICAgICAgbWF0LWNhcmQtc3VidGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBtYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGNvbG9yIDAuM3MgZWFzZTtcclxuICBcclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEtleWZyYW1lIGFuaW1hdGlvbnNcclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzbGlkZUluRG93biB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNjYWxlVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc3Bpbm5lclJvdGF0ZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIi5wcm9maWxlLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2ZpbGUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1heC13aWR0aDogOTAlO1xuICB9XG59XG4ucHJvZmlsZS1jb250YWluZXIgLmJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5iYWNrLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9maWxlLWNvbnRhaW5lciAuYmFjay1idXR0b24ge1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG59XG4ucHJvZmlsZS1jb250YWluZXIgLmxvYWRpbmcsXG4ucHJvZmlsZS1jb250YWluZXIgLmVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5sb2FkaW5nIG1hdC1zcGlubmVyLFxuLnByb2ZpbGUtY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIG1hdC1zcGlubmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYW5pbWF0aW9uOiBzcGlubmVyUm90YXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAubG9hZGluZyB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNlNTM5MzU7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLnByb2ZpbGUtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAucHJvZmlsZS1jb250ZW50IGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICMzZjUxYjU7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBhbmltYXRpb246IHNsaWRlSW5Eb3duIDAuNnMgZWFzZTtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAucHJvZmlsZS1jb250ZW50IC5wcm9maWxlLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAucHJvZmlsZS1jb250ZW50IC5wcm9maWxlLWRldGFpbHMgbWF0LWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xuICBhbmltYXRpb246IHNjYWxlVXAgMC41cyBlYXNlO1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5wcm9maWxlLWNvbnRlbnQgLnByb2ZpbGUtZGV0YWlscyBtYXQtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAucHJvZmlsZS1jb250ZW50IC5wcm9maWxlLWRldGFpbHMgbWF0LWNhcmQgbWF0LWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLnByb2ZpbGUtY29udGVudCAucHJvZmlsZS1kZXRhaWxzIG1hdC1jYXJkIG1hdC1jYXJkLXRpdGxlLFxuLnByb2ZpbGUtY29udGFpbmVyIC5wcm9maWxlLWNvbnRlbnQgLnByb2ZpbGUtZGV0YWlscyBtYXQtY2FyZCBtYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAucHJvZmlsZS1jb250ZW50IC5wcm9maWxlLWRldGFpbHMgbWF0LWNhcmQgbWF0LWNhcmQtY29udGVudCBwIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLnByb2ZpbGUtY29udGVudCAucHJvZmlsZS1kZXRhaWxzIG1hdC1jYXJkIG1hdC1jYXJkLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAucHJvZmlsZS1jb250ZW50IC5wcm9maWxlLWRldGFpbHMgbWF0LWNhcmQgbWF0LWNhcmQtYWN0aW9ucyBidXR0b24ge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5wcm9maWxlLWNvbnRlbnQgLnByb2ZpbGUtZGV0YWlscyBtYXQtY2FyZCBtYXQtY2FyZC1hY3Rpb25zIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzY2FsZVVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3Bpbm5lclJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let ProfileComponent = class ProfileComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.userData = null; // Holds the user's data
        this.loading = true; // Show a loading spinner while data is being fetched
        this.error = null;
    }
    ngOnInit() {
        this.fetchUserData();
    }
    fetchUserData() {
        const token = localStorage.getItem('token'); // Retrieve token from local storage if it exists
        if (token) {
            // Include 'Bearer ' prefix as required by the backend
            const authorizationHeader = `Bearer ${token}`;
            // Make the API call with token as a query parameter
            this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendurl}/user?authorization=${encodeURIComponent(authorizationHeader)}`, {})
                .subscribe({
                next: (data) => {
                    this.userData = data.user;
                    this.loading = false;
                    console.log(data);
                },
                error: (err) => {
                    this.error = 'Failed to fetch user data. Please try again later.';
                    this.loading = false;
                    if (err.status === 401) {
                        this.router.navigate(['/login']); // Redirect to login if unauthorized
                    }
                }
            });
        }
        else {
            // Handle the case where there is no token
            this.error = 'Authorization token is missing. Please log in again.';
            this.router.navigate(['/login']); // Redirect to login if unauthorized
        }
    }
    goBack() {
        this.router.navigate(['/dashboard']);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProfileComponent);



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

/***/ "./src/app/resume-upload/resume-upload.component.scss":
/*!************************************************************!*\
  !*** ./src/app/resume-upload/resume-upload.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* General container styles */\ndiv {\n  font-family: \"Arial\", sans-serif;\n  background-color: #f4f6f9;\n  padding: 30px;\n  max-width: 800px;\n  margin: 40px auto;\n  border-radius: 15px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n  -webkit-animation: fadeIn 1.5s ease-in-out;\n          animation: fadeIn 1.5s ease-in-out;\n}\n/* Header Styles */\nh2 {\n  text-align: center;\n  color: #3f51b5;\n  font-size: 26px;\n  margin-bottom: 30px;\n  font-weight: 700;\n  -webkit-animation: fadeInUp 1.5s ease-in-out;\n          animation: fadeInUp 1.5s ease-in-out;\n}\n/* Upload Section */\ninput[type=file] {\n  display: none;\n}\n.file-upload-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #4CAF50;\n  border-radius: 50px;\n  background-color: #fff;\n  padding: 12px 30px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n  -webkit-animation: fadeIn 1.5s ease-in-out;\n          animation: fadeIn 1.5s ease-in-out;\n}\n.file-upload-container:hover {\n  background-color: #f2f2f2;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n}\n.file-upload-container .file-name {\n  font-size: 16px;\n  font-weight: 500;\n  color: #333;\n}\n.file-upload-container .file-icon {\n  margin-right: 10px;\n  font-size: 20px;\n  color: #4CAF50;\n}\n/* Form Section */\nform {\n  display: flex;\n  flex-wrap: wrap;\n  /* Allows the input fields to wrap into multiple rows */\n  gap: 20px;\n  max-width: 600px;\n  margin: 0 auto;\n  -webkit-animation: fadeInUp 1.5s ease-in-out;\n          animation: fadeInUp 1.5s ease-in-out;\n}\n/* Form Row for Input Fields */\n.form-row {\n  display: flex;\n  flex: 2;\n  /* Allow each form row to take equal space */\n  flex-basis: calc(50% - 10px);\n  /* 50% width for two inputs per row, with gap between them */\n  gap: 10px;\n}\n/* Input Field Styles */\ninput, textarea {\n  width: 100%;\n  padding: 14px;\n  border-radius: 8px;\n  border: 2px solid #ddd;\n  font-size: 16px;\n  transition: border 0.3s ease;\n  background-color: #fff;\n}\ninput:focus, textarea:focus {\n  border: 2px solid #4CAF50;\n  outline: none;\n}\n/* Label Styles */\nlabel {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 8px;\n  display: block;\n  text-transform: uppercase;\n}\n/* Button Styles */\nbutton {\n  padding: 12px 25px;\n  background-color: #4CAF50;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 18px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  align-self: center;\n}\nbutton:hover {\n  background-color: #45a049;\n}\n/* Animation for Section Appearance */\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n/* Responsive Styles */\n@media (max-width: 600px) {\n  h2 {\n    font-size: 20px;\n  }\n\n  form {\n    width: 100%;\n  }\n\n  .file-upload-container {\n    width: 100%;\n    font-size: 14px;\n  }\n\n  input, textarea {\n    font-size: 14px;\n  }\n\n  .form-row {\n    flex: 1 1 100%;\n    /* Stack the fields on small screens */\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lLXVwbG9hZC9EOlxcSkJQb3J0YWxcXEpCRnJvbnRlbmRcXEpCUG9ydGFsRnJvbnRlbmQvc3JjXFxhcHBcXHJlc3VtZS11cGxvYWRcXHJlc3VtZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS11cGxvYWQvcmVzdW1lLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBQTtBQUNBO0VBQ0ksZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNDSjtBREVFLGtCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7QUNDSjtBREVFLG1CQUFBO0FBQ0E7RUFDRSxhQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNDSjtBREVFO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQ0NKO0FERUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjtBREVFLGlCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUFpQix1REFBQTtFQUNqQixTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtBQ0VKO0FEQ0UsOEJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQVMsNENBQUE7RUFDVCw0QkFBQTtFQUE4Qiw0REFBQTtFQUM5QixTQUFBO0FDSUo7QURERSx1QkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNJSjtBRERFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FDSUo7QURERSxpQkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDSUo7QURERSxrQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7QUNJSjtBRERFO0VBQ0UseUJBQUE7QUNJSjtBRERFLHFDQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7RUNJSjtFREZFO0lBQ0UsVUFBQTtFQ0lKO0FBQ0Y7QURWRTtFQUNFO0lBQ0UsVUFBQTtFQ0lKO0VERkU7SUFDRSxVQUFBO0VDSUo7QUFDRjtBRERFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtFQ0dKO0VEREU7SUFDRSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFQ0dKO0FBQ0Y7QURYRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7RUNHSjtFRERFO0lBQ0UsVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUNHSjtBQUNGO0FEQUUsc0JBQUE7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFQ0VKOztFRENFO0lBQ0UsV0FBQTtFQ0VKOztFRENFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUNFSjs7RURDRTtJQUNFLGVBQUE7RUNFSjs7RURDRTtJQUNFLGNBQUE7SUFBZ0Isc0NBQUE7RUNHcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS11cGxvYWQvcmVzdW1lLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYWwgY29udGFpbmVyIHN0eWxlcyAqL1xyXG5kaXYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmY5O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAxLjVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAvKiBIZWFkZXIgU3R5bGVzICovXHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluVXAgMS41cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLyogVXBsb2FkIFNlY3Rpb24gKi9cclxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZmlsZS11cGxvYWQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNENBRjUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAxLjVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuZmlsZS11cGxvYWQtY29udGFpbmVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxlLXVwbG9hZC1jb250YWluZXIgLmZpbGUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxlLXVwbG9hZC1jb250YWluZXIgLmZpbGUtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzRDQUY1MDtcclxuICB9XHJcbiAgXHJcbiAgLyogRm9ybSBTZWN0aW9uICovXHJcbiAgZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwOyAvKiBBbGxvd3MgdGhlIGlucHV0IGZpZWxkcyB0byB3cmFwIGludG8gbXVsdGlwbGUgcm93cyAqL1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5VcCAxLjVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAvKiBGb3JtIFJvdyBmb3IgSW5wdXQgRmllbGRzICovXHJcbiAgLmZvcm0tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAyOyAvKiBBbGxvdyBlYWNoIGZvcm0gcm93IHRvIHRha2UgZXF1YWwgc3BhY2UgKi9cclxuICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMTBweCk7IC8qIDUwJSB3aWR0aCBmb3IgdHdvIGlucHV0cyBwZXIgcm93LCB3aXRoIGdhcCBiZXR3ZWVuIHRoZW0gKi9cclxuICAgIGdhcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogSW5wdXQgRmllbGQgU3R5bGVzICovXHJcbiAgaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBMYWJlbCBTdHlsZXMgKi9cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJ1dHRvbiBTdHlsZXMgKi9cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMTJweCAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxuICB9XHJcbiAgXHJcbiAgLyogQW5pbWF0aW9uIGZvciBTZWN0aW9uIEFwcGVhcmFuY2UgKi9cclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICBcclxuICAgIGZvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5maWxlLXVwbG9hZC1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW5wdXQsIHRleHRhcmVhIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZvcm0tcm93IHtcclxuICAgICAgZmxleDogMSAxIDEwMCU7IC8qIFN0YWNrIHRoZSBmaWVsZHMgb24gc21hbGwgc2NyZWVucyAqL1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCIvKiBHZW5lcmFsIGNvbnRhaW5lciBzdHlsZXMgKi9cbmRpdiB7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY2Zjk7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qIEhlYWRlciBTdHlsZXMgKi9cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzNmNTFiNTtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBhbmltYXRpb246IGZhZGVJblVwIDEuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qIFVwbG9hZCBTZWN0aW9uICovXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbGUtdXBsb2FkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNENBRjUwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5maWxlLXVwbG9hZC1jb250YWluZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5maWxlLXVwbG9hZC1jb250YWluZXIgLmZpbGUtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5maWxlLXVwbG9hZC1jb250YWluZXIgLmZpbGUtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzRDQUY1MDtcbn1cblxuLyogRm9ybSBTZWN0aW9uICovXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAvKiBBbGxvd3MgdGhlIGlucHV0IGZpZWxkcyB0byB3cmFwIGludG8gbXVsdGlwbGUgcm93cyAqL1xuICBnYXA6IDIwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbmltYXRpb246IGZhZGVJblVwIDEuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qIEZvcm0gUm93IGZvciBJbnB1dCBGaWVsZHMgKi9cbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDI7XG4gIC8qIEFsbG93IGVhY2ggZm9ybSByb3cgdG8gdGFrZSBlcXVhbCBzcGFjZSAqL1xuICBmbGV4LWJhc2lzOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAvKiA1MCUgd2lkdGggZm9yIHR3byBpbnB1dHMgcGVyIHJvdywgd2l0aCBnYXAgYmV0d2VlbiB0aGVtICovXG4gIGdhcDogMTBweDtcbn1cblxuLyogSW5wdXQgRmllbGQgU3R5bGVzICovXG5pbnB1dCwgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIExhYmVsIFN0eWxlcyAqL1xubGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKiBCdXR0b24gU3R5bGVzICovXG5idXR0b24ge1xuICBwYWRkaW5nOiAxMnB4IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xufVxuXG4vKiBBbmltYXRpb24gZm9yIFNlY3Rpb24gQXBwZWFyYW5jZSAqL1xuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5maWxlLXVwbG9hZC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmZvcm0tcm93IHtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAvKiBTdGFjayB0aGUgZmllbGRzIG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/resume-upload/resume-upload.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/resume-upload/resume-upload.component.ts ***!
  \**********************************************************/
/*! exports provided: ResumeUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeUploadComponent", function() { return ResumeUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



 // To make HTTP requests
let ResumeUploadComponent = class ResumeUploadComponent {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.resumeUploaded = false; // Flag to show form only after resume upload
        this.selectedFileName = ''; // To show selected file name
        this.resumeForm = this.fb.group({
            name: [''],
            jobTitle: [''],
            contactNo: [''],
            email: [''],
            address: [''],
            socialProfile: [''],
            professionalSummary: [''],
        });
    }
    ngOnInit() { }
    // Handle file input click
    onFileSelect(event) {
        const file = event.target.files[0];
        if (file) {
            this.selectedFileName = file.name; // Set the selected file name to display
            this.fileUpload(event); // Trigger file upload logic
        }
    }
    // File upload handler
    fileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            // Send the file to the Python backend
            this.http.post('http://localhost:5000/upload_resume', formData).subscribe((response) => {
                // Populate the form with the extracted data
                console.log(response);
                this.resumeForm.patchValue(response);
                this.resumeUploaded = true; // Set flag to true after successful upload and parse
            }, (error) => {
                console.error('Error uploading resume:', error);
            });
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
};
ResumeUploadComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ResumeUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume-upload',
        template: __webpack_require__(/*! raw-loader!./resume-upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/resume-upload/resume-upload.component.html"),
        styles: [__webpack_require__(/*! ./resume-upload.component.scss */ "./src/app/resume-upload/resume-upload.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ResumeUploadComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* General Styles */\n.full-width {\n  width: 100%;\n}\n::ng-deep .mat-dialog-container {\n  background: #fff;\n  color: #000000;\n}\n.mat-form-field {\n  margin-bottom: 20px;\n}\n/* Responsive Design */\n@media (max-width: 600px) {\n  .mat-form-field {\n    margin-bottom: 15px;\n  }\n}\n/* Dialog Header */\nh2 {\n  text-align: center;\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n  color: #000000;\n}\n/* Form Field Styles */\n.form-field {\n  display: flex;\n  flex-direction: column;\n}\n/* Error Messages */\n.mat-error {\n  font-size: 0.875rem;\n  color: #d50000;\n}\n/* Buttons */\nmat-dialog-actions {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\nmat-dialog-actions button {\n  flex: 1;\n  margin: 0 10px;\n  min-width: 120px;\n  color: #000000;\n}\nmat-dialog-actions button:hover {\n  background-color: #007bff;\n  color: white;\n  transition: background-color 0.2s ease-in-out;\n}\n/* Animations for Form Fields */\n.mat-form-field {\n  transition: all 0.2s ease-in-out;\n}\n.mat-form-field:focus-within {\n  border-color: #0077c8;\n}\n.mat-form-field .mat-input-element {\n  color: #000000;\n}\n.mat-form-field .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6);\n}\n/* Scrollbar Styles */\nmat-dialog-content {\n  max-height: 400px;\n  overflow-y: auto;\n  background: #fff;\n  color: #000000;\n  padding: 16px;\n  /* Custom scrollbar */\n  /* Firefox scrollbar styling */\n  scrollbar-color: #0077c8 #f1f1f1;\n  scrollbar-width: thin;\n  border-radius: 10px;\n}\nmat-dialog-content ::-webkit-scrollbar {\n  width: 8px;\n}\nmat-dialog-content ::-webkit-scrollbar-track {\n  background-color: #f1f1f1;\n  border-radius: 10px;\n}\nmat-dialog-content ::-webkit-scrollbar-thumb {\n  background-color: #0077c8;\n  border-radius: 10px;\n}\nmat-dialog-content ::-webkit-scrollbar-thumb:hover {\n  background-color: #005ea1;\n}\nmat-label {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0Q6XFxKQlBvcnRhbFxcSkJGcm9udGVuZFxcSkJQb3J0YWxGcm9udGVuZC9zcmNcXGFwcFxcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQUE7QUFDQTtFQUNFLFdBQUE7QUNDRjtBRENBO0VBRUUsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQSxzQkFBQTtBQUNBO0VBQ0U7SUFDRSxtQkFBQTtFQ0NGO0FBQ0Y7QURFQSxrQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FGO0FER0Esc0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0FGO0FER0EsbUJBQUE7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0FGO0FER0EsWUFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVFO0VBQ0UsT0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBSjtBREVJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7QUNBTjtBREtBLCtCQUFBO0FBQ0E7RUFDRSxnQ0FBQTtBQ0ZGO0FESUU7RUFDRSxxQkFBQTtBQ0ZKO0FES0U7RUFDRSxjQUFBO0FDSEo7QURNRTtFQUNFLHlCQUFBO0FDSko7QURRQSxxQkFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFFQSxxQkFBQTtFQW1CQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ3hCRjtBREdFO0VBQ0UsVUFBQTtBQ0RKO0FESUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDRko7QURLRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE1FO0VBQ0UseUJBQUE7QUNKSjtBRFlBO0VBQ0UsWUFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYWwgU3R5bGVzICovXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBcclxuICBiYWNrZ3JvdW5kOiAjZmZmOyBcclxuICBjb2xvcjogIzAwMDAwMDsgXHJcbiAgXHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvLyBTcGFjZSBiZXR3ZWVuIGZvcm0gZmllbGRzXHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAvLyBSZWR1Y2VkIHNwYWNpbmcgZm9yIHNtYWxsZXIgc2NyZWVuc1xyXG4gIH1cclxufVxyXG5cclxuLyogRGlhbG9nIEhlYWRlciAqL1xyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7IC8vIEhlYWRlciB0ZXh0IGNvbG9yXHJcbn1cclxuXHJcbi8qIEZvcm0gRmllbGQgU3R5bGVzICovXHJcbi5mb3JtLWZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8vIFN0YWNrIGxhYmVscyBhbmQgaW5wdXRzIHZlcnRpY2FsbHlcclxufVxyXG5cclxuLyogRXJyb3IgTWVzc2FnZXMgKi9cclxuLm1hdC1lcnJvciB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTsgLy8gU2xpZ2h0bHkgc21hbGxlciBmb250IGZvciBlcnJvciBtZXNzYWdlc1xyXG4gIGNvbG9yOiAjZDUwMDAwOyAvLyBFcnJvciBjb2xvclxyXG59XHJcblxyXG4vKiBCdXR0b25zICovXHJcbm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMjBweDsgLy8gU3BhY2UgYWJvdmUgYnV0dG9uc1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbjogMCAxMHB4OyAvLyBTcGFjZSBiZXR3ZWVuIGJ1dHRvbnNcclxuICAgIG1pbi13aWR0aDogMTIwcHg7IC8vIE1pbmltdW0gYnV0dG9uIHdpZHRoXHJcbiAgICBjb2xvcjogIzAwMDAwMDsgLy8gQnV0dG9uIHRleHQgY29sb3JcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgLy8gQnV0dG9uIGJhY2tncm91bmQgb24gaG92ZXJcclxuICAgICAgY29sb3I6IHdoaXRlOyAvLyBCdXR0b24gdGV4dCBjb2xvciBvbiBob3ZlclxyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7IC8vIFNtb290aCB0cmFuc2l0aW9uXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBbmltYXRpb25zIGZvciBGb3JtIEZpZWxkcyAqL1xyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDc3Yzg7IC8vIENoYW5nZSBib3JkZXIgY29sb3Igb24gZm9jdXNcclxuICB9XHJcblxyXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDsgLy8gSW5wdXQgdGV4dCBjb2xvclxyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7IC8vIExhYmVsIGNvbG9yXHJcbiAgfVxyXG59XHJcblxyXG4vKiBTY3JvbGxiYXIgU3R5bGVzICovXHJcbm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7IC8vIEFkanVzdCBmb3IgY29udGVudCBoZWlnaHQgYXMgbmVlZGVkXHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmOyBcclxuICBjb2xvcjogIzAwMDAwMDsgLy8gRGlhbG9nIHRleHQgY29sb3JcclxuICBwYWRkaW5nOiAxNnB4OyAvLyBQYWRkaW5nIGZvciBkaWFsb2cgY29udGVudFxyXG5cclxuICAvKiBDdXN0b20gc2Nyb2xsYmFyICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4OyAvLyBXaWR0aCBvZiBzY3JvbGxiYXJcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgLy8gVHJhY2sgY29sb3JcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc3Yzg7IC8vIFRodW1iIGNvbG9yXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZWExOyAvLyBIb3ZlciBjb2xvciBmb3IgdGh1bWJcclxuICB9XHJcblxyXG4gIC8qIEZpcmVmb3ggc2Nyb2xsYmFyIHN0eWxpbmcgKi9cclxuICBzY3JvbGxiYXItY29sb3I6ICMwMDc3YzggI2YxZjFmMTtcclxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5tYXQtbGFiZWx7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59IiwiLyogR2VuZXJhbCBTdHlsZXMgKi9cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbn1cbi8qIERpYWxvZyBIZWFkZXIgKi9cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi8qIEZvcm0gRmllbGQgU3R5bGVzICovXG4uZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIEVycm9yIE1lc3NhZ2VzICovXG4ubWF0LWVycm9yIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6ICNkNTAwMDA7XG59XG5cbi8qIEJ1dHRvbnMgKi9cbm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbm1hdC1kaWFsb2ctYWN0aW9ucyBidXR0b24ge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDAgMTBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5tYXQtZGlhbG9nLWFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qIEFuaW1hdGlvbnMgZm9yIEZvcm0gRmllbGRzICovXG4ubWF0LWZvcm0tZmllbGQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tYXQtZm9ybS1maWVsZDpmb2N1cy13aXRoaW4ge1xuICBib3JkZXItY29sb3I6ICMwMDc3Yzg7XG59XG4ubWF0LWZvcm0tZmllbGQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLyogU2Nyb2xsYmFyIFN0eWxlcyAqL1xubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiAxNnB4O1xuICAvKiBDdXN0b20gc2Nyb2xsYmFyICovXG4gIC8qIEZpcmVmb3ggc2Nyb2xsYmFyIHN0eWxpbmcgKi9cbiAgc2Nyb2xsYmFyLWNvbG9yOiAjMDA3N2M4ICNmMWYxZjE7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbm1hdC1kaWFsb2ctY29udGVudCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cbm1hdC1kaWFsb2ctY29udGVudCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbm1hdC1kaWFsb2ctY29udGVudCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdjODtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbm1hdC1kaWFsb2ctY29udGVudCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWVhMTtcbn1cblxubWF0LWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

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
    production: true,
    backendurl: "http://localhost:8081/api/auth",
    pythonBackendUrl: 'http://localhost:5000' // Python backend
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