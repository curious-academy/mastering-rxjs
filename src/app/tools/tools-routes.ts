import { Routes } from "@angular/router";
import { ReplaySubjectComponent } from "./replay-subject/replay-subject.component";
import { AsyncSubjectComponent } from "./async-subject/async-subject.component";

export const toolsRoutes: Routes = [
  { path: 'replay-subject', component: ReplaySubjectComponent },
  { path: 'async-subject', component: AsyncSubjectComponent }
]
