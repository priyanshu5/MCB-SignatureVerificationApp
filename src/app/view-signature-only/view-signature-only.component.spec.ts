import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSignatureOnlyComponent } from './view-signature-only.component';

describe('ViewSignatureOnlyComponent', () => {
  let component: ViewSignatureOnlyComponent;
  let fixture: ComponentFixture<ViewSignatureOnlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSignatureOnlyComponent]
    });
    fixture = TestBed.createComponent(ViewSignatureOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
