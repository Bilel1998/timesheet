import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetLibraryComponent } from './timesheet-library.component';

describe('TimesheetLibraryComponent', () => {
  let component: TimesheetLibraryComponent;
  let fixture: ComponentFixture<TimesheetLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
