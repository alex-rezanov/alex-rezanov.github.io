import { Injectable, WritableSignal, computed } from '@angular/core';
import { createActiveSessionState } from '../../../shared/utils';
import { ActiveSessionStateModel, SideBarItem } from '../../../shared/models';
import { NavigationSection, WorkSectionType } from '../../../shared/enums';

@Injectable({
  providedIn: 'root',
})
export class ActiveSessionStore {
  private readonly state: WritableSignal<ActiveSessionStateModel> = createActiveSessionState();

  isSidebarEmpty = computed(() => this.state().sideBarItems.length === 0);
  sideBarItems = computed<SideBarItem<NavigationSection | WorkSectionType>[]>(() => this.state().sideBarItems);
  setSideBarItems(sideBarItems: SideBarItem<NavigationSection | WorkSectionType>[]): void {
    this.state.update(state => ({
      ...state,
      sideBarItems,
    }));
  }

  resetSideBarItems(): void {
    this.state.update(state => ({
      ...state,
      sideBarItems: [],
    }));
  }
}
