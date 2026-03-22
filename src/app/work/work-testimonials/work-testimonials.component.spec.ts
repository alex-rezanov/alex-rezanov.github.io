import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTestimonialsComponent } from './work-testimonials.component';

describe('WorkTestimonialsComponent', () => {
  let component: WorkTestimonialsComponent;
  let fixture: ComponentFixture<WorkTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkTestimonialsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTestimonialsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
