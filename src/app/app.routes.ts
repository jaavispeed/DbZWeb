import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/dbz-web/dbz-web.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
