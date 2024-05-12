import { Routes } from '@angular/router';
import { operatorsRoutes } from './operators/operators.routes';

export const routes: Routes = [
  {
    path: 'operators',
    children: operatorsRoutes
  }
];
