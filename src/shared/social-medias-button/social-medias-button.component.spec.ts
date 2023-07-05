import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediasButtonComponent } from './social-medias-button.component';

describe('SocialMediasButtonComponent', () => {
  let component: SocialMediasButtonComponent;
  let fixture: ComponentFixture<SocialMediasButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediasButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediasButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
