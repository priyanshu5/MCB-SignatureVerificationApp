import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureVerificationDataComponent } from './signature-verification-data.component';

describe('SignatureVerificationDataComponent', () => {
  let component: SignatureVerificationDataComponent;
  let fixture: ComponentFixture<SignatureVerificationDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignatureVerificationDataComponent]
    });
    fixture = TestBed.createComponent(SignatureVerificationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
