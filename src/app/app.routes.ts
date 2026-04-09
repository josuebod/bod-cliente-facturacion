import { Routes } from '@angular/router';
import { ExamplePage } from './pages';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages').then((m) => m.ClienteFacturas),
  },
];
