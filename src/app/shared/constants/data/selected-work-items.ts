import { WorkPreviewData, WorkPreviewItem } from '../../models';
import { WorkSectionType } from '../../enums';

const LAPUNZEL_PREVIEW_DATA: WorkPreviewData = {
  navigationLink: 'lapunzel',
  sectionData: {
    intro: {
      type: WorkSectionType.INTRO,
      sideBarData: { label: 'Intro', link: WorkSectionType.INTRO },
      title: 'Lapunzel - Ukrainian pet cosmetics shop',
      description: {
        text: 'Redesign of the e-commerce experience for a Ukrainian vegan pet cosmetics brand, so that pet owners can effortlessly discover, trust, and buy products that their animals actually deserve.',
        chips: ['Website', 'E-commerce', 'Mobile-first'],
      },
      imageSection: {
        imageUrls: ['assets/images/welcome.jpg', 'assets/images/welcome.jpg', 'assets/images/welcome.jpg', 'assets/images/welcome.jpg'],
        backGroundColor: '#FCE64D',
      },
      introTableData: [
        { label: 'Product', value: 'Lapunzel, Ukrainian vegan pet cosmetics brand' },
        { label: 'Role', value: 'UX Designer (end-to-end)' },
        { label: 'Team', value: 'Design team, stakeholders (brand founder)' },
        { label: 'Target audience', value: 'Ukrainian pet owners, 25–40, mobile shoppers' },
        { label: 'Platform', value: 'Mobile-first, desktop' },
      ],
    },
  },
};

const GEOSTRATEGISTS_PREVIEW_DATA: WorkPreviewData = {
  navigationLink: 'geostrategists',
  sectionData: {
    problem: {
      type: WorkSectionType.PROBLEM,
      sideBarData: { label: 'Problem', link: WorkSectionType.PROBLEM },
    },
    conclusion: {
      type: WorkSectionType.CONCLUSION,
      sideBarData: { label: 'Conclusion', link: WorkSectionType.CONCLUSION },
    },
  },
};

const PLENTY_ONE_PREVIEW_DATA: WorkPreviewData = {
  navigationLink: 'plenty_one',
  sectionData: {},
};

export const WORK_ITEMS: WorkPreviewItem[] = [
  {
    title: 'PlentyONE - All-in-one ERP for e-commerce',
    description:
      'Mobile platform designed to bridge the gap between shelter dogs and new home. Main objectives that I set to myself was to streamline dog discovery, adoption journey and donation process, maintain a well-polished UI.',
    imageUrl: 'assets/images/welcome.jpg',
    chips: ['App', 'Social good', 'Practice'],
    previewData: PLENTY_ONE_PREVIEW_DATA,
  },
  {
    title: 'Geostrategists - Platform for geopolitical experts',
    description:
      'Mobile platform designed to bridge the gap between shelter dogs and new home. Main objectives that I set to myself was to streamline dog discovery, adoption journey and donation process, maintain a well-polished UI.',
    imageUrl: 'assets/images/works_geostrategists.jpg',
    chips: ['App', 'Social good', 'Practice'],
    previewData: GEOSTRATEGISTS_PREVIEW_DATA,
  },
  {
    title: 'Lapunzel - Ukrainian pet cosmetics shop',
    description:
      'Mobile platform designed to bridge the gap between shelter dogs and new home. Main objectives that I set to myself was to streamline dog discovery, adoption journey and donation process, maintain a well-polished UI.',
    imageUrl: 'assets/images/works_lapunzel.jpg',
    chips: ['Website', 'E-commerce', 'Mobile-first'],
    previewData: LAPUNZEL_PREVIEW_DATA,
  },
];

export const WORK_ITEMS_MAP = new Map<string, WorkPreviewItem>(WORK_ITEMS.map(item => [item.previewData.navigationLink, item]));
