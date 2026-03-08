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

export interface IntroData extends SectionItemBase<WorkSectionType.INTRO> {
  title: string;
  description: {
    text: string;
    chips: string[];
  };
  introTableData: workTableItem[];
  imageSection?: ImageSectionData;
}

export interface ImageSectionData {
  imageUrls: string[];
  backGroundColor: string;
}

export interface workTableItem {
  label: string;
  value: string;
}

export interface CardTitleData {
  text: string;
  descriptions: TitleDescriptionItem[];
}

export interface ProblemData extends SectionItemBase<WorkSectionType.PROBLEM> {
  title: CardTitleData;
  problemTableData: workTableItem[];
  tableDescription?: string;
  footerImageUrl?: string;
}

export interface TitleDescriptionItem {
  text: string;
  isList?: boolean;
}

export interface ResearchData extends SectionItemBase<WorkSectionType.RESEARCH> {
  title: CardTitleData;
  researchImageWithDescription: ImageWithDescriptionItem;
  qualitativeInsights: QualitativeInsightItem[];
  conclusion: string;
  conclusionImageWithDescription: ImageWithDescriptionItem;
}

export interface QualitativeInsightItem {
  headerChipTitle: string;
  headerTitle: string;
  descriptions: string[];
  takeaways: TakeawayItem[];
}

export interface TakeawayItem {
  keyTakeawayTitle: string;
  keyTakeaway: string[];
}

export interface ImageWithDescriptionItem {
  imageUrl: string;
  description: string;
}

export interface DesignData extends SectionItemBase<WorkSectionType.DESIGN> {
  title: CardTitleData;
  titleImageUrl?: string;
  designDecisions: DesignDecision[];
  designFlowItems: DesignFlowItem[];
  footerImage: ImageWithDescriptionItem;
}

export interface DesignFlowItem {
  imageUrls: string[];
  imageBackgroundColor: string;
  imageDescription: string;
  descriptions: string[];
}

export interface DesignDecision {
  decisionImageUrl: string;
  title: CardTitleData;
}

export interface ConclusionData extends SectionItemBase<WorkSectionType.CONCLUSION> {
  title: string;
  conclusionTableData: ConclusionTableItem[];
}

export interface ConclusionTableItem {
  title: string;
  descriptions: string[];
}

export type SectionItem = IntroData | ProblemData | ResearchData | DesignData | ConclusionData;
