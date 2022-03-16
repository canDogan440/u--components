import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutralSystemInformationDialogComponent } from './neutral-system-information-dialog.component';

describe('NeutralSystemInformationDialogComponent', () => {
  let component: NeutralSystemInformationDialogComponent;
  let fixture: ComponentFixture<NeutralSystemInformationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeutralSystemInformationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeutralSystemInformationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
