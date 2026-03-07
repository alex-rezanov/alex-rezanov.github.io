import { ActiveSessionStateModel } from '../../models';
import { signal, WritableSignal } from '@angular/core';

export const createActiveSessionState = (): WritableSignal<ActiveSessionStateModel> => {
  return signal<ActiveSessionStateModel>({
    sideBarItems: [],
  });
};
