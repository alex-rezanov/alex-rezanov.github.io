import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProblemComponent } from './work-problem.component';

describe('WorkProblemComponent', () => {
  let component: WorkProblemComponent;
  let fixture: ComponentFixture<WorkProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkProblemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkProblemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
