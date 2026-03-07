import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDesignComponent } from './work-design.component';

describe('WorkDesignComponent', () => {
  let component: WorkDesignComponent;
  let fixture: ComponentFixture<WorkDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkDesignComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkDesignComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
