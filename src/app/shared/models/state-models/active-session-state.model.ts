import { SideBarItem } from '../side-bar-item';
import { NavigationSection, WorkSectionType } from '../../enums';

export interface ActiveSessionStateModel {
  sideBarItems: SideBarItem<NavigationSection | WorkSectionType>[];
}
