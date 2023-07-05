import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGlowComponent } from './button-glow.component';

describe('ButtonGlowComponent', () => {
  let component: ButtonGlowComponent;
  let fixture: ComponentFixture<ButtonGlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonGlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
