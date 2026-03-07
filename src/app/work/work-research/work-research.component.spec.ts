import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkResearchComponent } from './work-research.component';

describe('WorkResearchComponent', () => {
  let component: WorkResearchComponent;
  let fixture: ComponentFixture<WorkResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkResearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkResearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
