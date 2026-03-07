import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkConclusionComponent } from './work-conclusion.component';

describe('WorkConclusionComponent', () => {
  let component: WorkConclusionComponent;
  let fixture: ComponentFixture<WorkConclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkConclusionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkConclusionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
