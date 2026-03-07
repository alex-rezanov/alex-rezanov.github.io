import { WorkPreviewItem } from '../../models';
import { WorkSectionType } from '../../enums';

export const WORK_ITEMS: WorkPreviewItem[] = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'assets/images/welcome.jpg',
    chips: ['chip', 'chip'],
    previewData: {
      navigationLink: 'project_1',
      sectionData: {},
    },
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    imageUrl: 'assets/images/welcome.jpg',
    chips: ['chip', 'chip'],
    previewData: {
      navigationLink: 'project_2',
      sectionData: {
        intro: {
          type: WorkSectionType.INTRO,
          sideBarData: { label: 'INTRO', link: WorkSectionType.INTRO },
        },
        problem: {
          type: WorkSectionType.PROBLEM,
          sideBarData: { label: 'PROBLEM', link: WorkSectionType.PROBLEM },
        },
        conclusion: {
          type: WorkSectionType.CONCLUSION,
          sideBarData: { label: 'CONCLUSION', link: WorkSectionType.CONCLUSION },
        },
      },
    },
  },
  {
    title: 'Project 3',
    description: 'Description for Project 3',
    imageUrl: 'assets/images/welcome.jpg',
    chips: ['chip', 'chip'],
    previewData: {
      navigationLink: 'project_3',
      sectionData: {
        intro: {
          type: WorkSectionType.INTRO,
          sideBarData: { label: 'INTRO 3', link: WorkSectionType.INTRO },
        },
      },
    },
  },
  {
    title: 'Project 4',
    description: 'Description for Project 4',
    imageUrl: 'assets/images/welcome.jpg',
    chips: ['chip', 'chip'],
    previewData: {
      navigationLink: 'project_4',
      sectionData: {
        problem: {
          type: WorkSectionType.PROBLEM,
          sideBarData: { label: 'Problem', link: WorkSectionType.PROBLEM },
        },
      },
    },
  },
];

export const WORK_ITEMS_MAP = new Map<string, WorkPreviewItem>(WORK_ITEMS.map(item => [item.previewData.navigationLink, item]));
