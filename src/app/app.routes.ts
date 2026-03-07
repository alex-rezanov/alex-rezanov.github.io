import { Routes } from '@angular/router';
import { PortfolioRoutes } from './shared/enums';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: PortfolioRoutes.HOME,
  },
  {
    path: '',
    children: [
      {
        path: PortfolioRoutes.HOME,
        data: { isNameVisible: true },
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
      },
      {
        path: ':selectedWork',
        loadComponent: () => import('./work/work.component').then(m => m.WorkComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: `/${PortfolioRoutes.HOME}`,
  },
];
