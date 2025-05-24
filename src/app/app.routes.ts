import { Routes } from '@angular/router';
import { operatorsRoutes } from './operators/operators.routes';
import { RequestMultiPagesComponent } from './request-multi-pages/request-multi-pages.component';
import { toolsRoutes } from './tools/tools-routes';
import { MarbleComponent } from './tests/marble/marble.component';

export const routes: Routes = [
  {
    path: 'operators',
    children: operatorsRoutes
  },
  {
    path: 'tools',
    children: toolsRoutes
  },
  {
    path: 'multi-pages-api',
    component: RequestMultiPagesComponent
  },
  {
    path: 'marble',
    component: MarbleComponent
  }
];
