import { SideBarItem } from '../side-bar-item';
import { NavigationSection, WorkSectionType } from '../../enums';

export interface ActiveSessionStateModel {
  isMobile: boolean;
  sideBarItems: SideBarItem<NavigationSection | WorkSectionType>[];
}
