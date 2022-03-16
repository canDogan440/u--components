import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPfadComponent } from './button-pfad.component';

describe('ButtonPfadComponent', () => {
  let component: ButtonPfadComponent;
  let fixture: ComponentFixture<ButtonPfadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPfadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPfadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
