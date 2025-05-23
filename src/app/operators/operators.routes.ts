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
import { StartWithComponent } from "./start-with/start-with.component";
import { DelayComponent } from "./delay/delay.component";
import { DistinctUntilChangedComponent } from "./distinct-until-changed/distinct-until-changed.component";
import { TakeWhileComponent } from "./take-while/take-while.component";
import { MergeComponent } from "./merge/merge.component";
import { ConcatComponent } from "./concat/concat.component";
import { ZipComponent } from "./zip/zip.component";
import { ForkJoinComponent } from "./fork-join/fork-join.component";
import { WithLatestFromComponent } from "./with-latest-from/with-latest-from.component";
import { ReplaySubjectComponent } from "../tools/replay-subject/replay-subject.component";

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
  },
  {
    path: 'start-with',
    component: StartWithComponent
  },
  {
    path: 'delay',
    component: DelayComponent
  },
  {
    path: 'distinct-until-changed',
    component: DistinctUntilChangedComponent
  },
  {
    path: 'take-while',
    component: TakeWhileComponent
  },
  {
    path: 'merge',
    component: MergeComponent
  },
  {
    path: 'concat',
    component: ConcatComponent
  },
  {
    path: 'zip',
    component: ZipComponent
  },
  {
    path: 'forkjoin',
    component: ForkJoinComponent
  },
  {
    path: 'withlatestfrom',
    component: WithLatestFromComponent
  }
]
