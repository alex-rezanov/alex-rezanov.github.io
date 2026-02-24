import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlaygroundComponent } from './home-playground.component';

describe('HomePlaygroundComponent', () => {
  let component: HomePlaygroundComponent;
  let fixture: ComponentFixture<HomePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePlaygroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePlaygroundComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
