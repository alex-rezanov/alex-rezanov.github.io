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
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: `/${PortfolioRoutes.HOME}`,
  },
];
