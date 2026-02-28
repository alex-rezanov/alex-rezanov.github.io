import { SideBarItem } from '../models';
import { HomeSection } from '../enums';

export const SIDE_BAR_ITEMS: SideBarItem[] = [
  { label: 'Home', link: HomeSection.WELCOME },
  { label: 'Selected Work', link: HomeSection.SELECTED_WORK },
  { label: 'Playground', link: HomeSection.PLAYGROUND },
  { label: 'Experience', link: HomeSection.EXPERIENCE },
  { label: 'Testimonials', link: HomeSection.TESTIMONIALS },
  { label: 'Education', link: HomeSection.EDUCATION },
  { label: 'About', link: HomeSection.ABOUT },
  { label: 'Contact', link: HomeSection.CONTACT },
];
