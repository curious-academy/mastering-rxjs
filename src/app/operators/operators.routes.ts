import { Routes } from "@angular/router";
import { TapComponent } from "./tap/tap.component";
import { MapComponent } from "./map/map.component";
import { CatchErrorComponent } from "./catch-error/catch-error.component";

export const operatorsRoutes: Routes = [
  {
    path: 'tap',
    component: TapComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'catch-error',
    component: CatchErrorComponent
  }
]
