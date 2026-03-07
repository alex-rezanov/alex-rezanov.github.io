import { SideBarItem } from '../models';
import { NavigationSection } from '../enums';

export const HOME_SIDE_BAR_ITEMS: SideBarItem<NavigationSection>[] = [
  { label: 'Home', link: NavigationSection.WELCOME },
  { label: 'Selected Work', link: NavigationSection.SELECTED_WORK },
  { label: 'Playground', link: NavigationSection.PLAYGROUND },
  { label: 'Experience', link: NavigationSection.EXPERIENCE },
  { label: 'Testimonials', link: NavigationSection.TESTIMONIALS },
  { label: 'Education', link: NavigationSection.EDUCATION },
  { label: 'About', link: NavigationSection.ABOUT },
  { label: 'Contact', link: NavigationSection.CONTACT },
];
