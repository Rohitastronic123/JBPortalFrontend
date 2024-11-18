import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSearchPopupComponent } from './job-search-popup.component';

describe('JobSearchPopupComponent', () => {
  let component: JobSearchPopupComponent;
  let fixture: ComponentFixture<JobSearchPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSearchPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSearchPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
