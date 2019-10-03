import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInSignUpComponent } from './linked-in-sign-up.component';

describe('LinkedInSignUpComponent', () => {
  let component: LinkedInSignUpComponent;
  let fixture: ComponentFixture<LinkedInSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedInSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedInSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
