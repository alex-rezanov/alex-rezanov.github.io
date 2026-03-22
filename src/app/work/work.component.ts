import { Component, effect, inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioRoutes, WorkSectionType } from '../shared/enums';
import { ActiveSessionStore } from '../core/services';
import { SectionItem } from '../shared/models';
import { WorkIntroComponent } from './work-intro/work-intro.component';
import { WorkProblemComponent } from './work-problem/work-problem.component';
import { WorkResearchComponent } from './work-research/work-research.component';
import { WorkDesignComponent } from './work-design/work-design.component';
import { WorkConclusionComponent } from './work-conclusion/work-conclusion.component';
import { WORK_ITEMS_MAP } from '../shared/constants';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { WorkProcessComponent } from './work-process/work-process.component';
import { WorkTestimonialsComponent } from './work-testimonials/work-testimonials.component';

@Component({
  selector: 'app-work',
  imports: [
    WorkIntroComponent,
    WorkProblemComponent,
    WorkResearchComponent,
    WorkDesignComponent,
    WorkConclusionComponent,
    MatButton,
    MatIcon,
    WorkProcessComponent,
    WorkTestimonialsComponent,
  ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent implements OnInit, OnDestroy {
  selectedWork = input.required<string>();

  protected readonly workSectionType = WorkSectionType;

  private readonly router = inject(Router);
  private readonly activeSessionStore = inject(ActiveSessionStore);

  protected readonly sections = signal<SectionItem[]>([]);

  constructor() {
    this.sideBarEffect();
  }

  ngOnInit(): void {
    const item = WORK_ITEMS_MAP.get(this.selectedWork());

    if (!item) {
      this.router.navigate(['/', PortfolioRoutes.HOME]);
      return;
    }

    const { sectionData } = item.previewData;

    const sections = Object.values(sectionData).filter((section): section is SectionItem => section != null);
    this.sections.set(sections);
  }

  protected onBackClick(): void {
    this.router.navigate(['/', PortfolioRoutes.HOME]);
  }

  ngOnDestroy(): void {
    this.activeSessionStore.resetSideBarItems();
  }

  private sideBarEffect(): void {
    effect(() => {
      const sideBarItems = this.sections().map(section => section.sideBarData);
      this.activeSessionStore.setSideBarItems(sideBarItems);
    });
  }
}
