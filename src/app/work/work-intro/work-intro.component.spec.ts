import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkIntroComponent } from './work-intro.component';

describe('WorkIntroComponent', () => {
  let component: WorkIntroComponent;
  let fixture: ComponentFixture<WorkIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkIntroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkIntroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
