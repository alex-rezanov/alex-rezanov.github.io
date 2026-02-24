import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSelectedWorkComponent } from './home-selected-work.component';

describe('HomeSelectedWorkComponent', () => {
  let component: HomeSelectedWorkComponent;
  let fixture: ComponentFixture<HomeSelectedWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSelectedWorkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSelectedWorkComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
