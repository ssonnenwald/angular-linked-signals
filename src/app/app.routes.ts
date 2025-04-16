import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'linked-signals',
  },
  {
    title: 'Linked Signals',
    path: 'linked-signals',
    loadComponent: () =>
      import('./components/linked-signals/linked-signals.component'),
  },
  { path: '**', redirectTo: '' }, // Redirect unmatched routes
];
