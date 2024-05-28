import { Routes } from "@angular/router";
import { TapComponent } from "./tap/tap.component";
import { MapComponent } from "./map/map.component";
import { CatchErrorComponent } from "./catch-error/catch-error.component";
import { RetryComponent } from "./retry/retry.component";
import { RetryWhenComponent } from "./retry-when/retry-when.component";
import { ScanComponent } from "./scan/scan.component";
import { ReduceComponent } from "./reduce/reduce.component";
import { DebounceTimeComponent } from "./debounce-time/debounce-time.component";
import { TakeUntilComponent } from "./take-until/take-until.component";
import { CombineLatestComponent } from "./combine-latest/combine-latest.component";

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
    path: 'scan',
    component: ScanComponent
  },
  {
    path: 'reduce',
    component: ReduceComponent
  },
  {
    path: 'catch-error',
    component: CatchErrorComponent
  },
  {
    path: 'retry',
    component: RetryComponent
  },
  {
    path: 'retry-when',
    component: RetryWhenComponent
  },
  {
    path: 'debounce-time',
    component: DebounceTimeComponent
  },
  {
    path: 'take-until',
    component: TakeUntilComponent
  },
  {
    path: 'combine-latest',
    component: CombineLatestComponent
  }
]
