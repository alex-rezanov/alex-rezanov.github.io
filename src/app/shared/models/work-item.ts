import { SideBarItem } from './side-bar-item';
import { WorkSectionType } from '../enums';
import { PlaygroundItem } from './playground-item';

export interface WorkPreviewItem extends PlaygroundItem {
  previewData: WorkPreviewData;
}

export interface WorkPreviewData {
  navigationLink: string;
  sectionData: WorkSectionData;
}

export interface WorkSectionData {
  intro?: IntroData;
  problem?: ProblemData;
  research?: ResearchData;
  design?: DesignData;
  conclusion?: ConclusionData;
}

export interface SectionItemBase<T extends WorkSectionType> {
  type: T;
  sideBarData: SideBarItem<T>;
}

export interface IntroData extends SectionItemBase<WorkSectionType.INTRO> {}

export interface ProblemData extends SectionItemBase<WorkSectionType.PROBLEM> {}

export interface ResearchData extends SectionItemBase<WorkSectionType.RESEARCH> {}

export interface DesignData extends SectionItemBase<WorkSectionType.DESIGN> {}

export interface ConclusionData extends SectionItemBase<WorkSectionType.CONCLUSION> {}

export type SectionItem = IntroData | ProblemData | ResearchData | DesignData | ConclusionData;
