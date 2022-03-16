import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFailureDialogComponent } from './error-failure-dialog.component';

describe('ErrorFailureDialogComponent', () => {
  let component: ErrorFailureDialogComponent;
  let fixture: ComponentFixture<ErrorFailureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorFailureDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFailureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
