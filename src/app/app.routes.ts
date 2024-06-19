import { Routes } from '@angular/router';
import { operatorsRoutes } from './operators/operators.routes';
import { RequestMultiPagesComponent } from './request-multi-pages/request-multi-pages.component';

export const routes: Routes = [
  {
    path: 'operators',
    children: operatorsRoutes
  },
  {
    path: 'multi-pages-api',
    component: RequestMultiPagesComponent
  }
];
