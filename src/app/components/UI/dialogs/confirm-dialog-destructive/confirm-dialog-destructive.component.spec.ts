import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogDestructiveComponent } from './confirm-dialog-destructive.component';

describe('ConfirmDialogDestructiveComponent', () => {
  let component: ConfirmDialogDestructiveComponent;
  let fixture: ComponentFixture<ConfirmDialogDestructiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialogDestructiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogDestructiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
