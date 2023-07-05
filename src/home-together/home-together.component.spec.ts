import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTogetherComponent } from './home-together.component';

describe('HomeTogetherComponent', () => {
  let component: HomeTogetherComponent;
  let fixture: ComponentFixture<HomeTogetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTogetherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
