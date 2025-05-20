import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { concatMap, distinctUntilChanged, map, of, timer } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './distinct-until-changed.component.html',
  styleUrl: './distinct-until-changed.component.css'
})
export class DistinctUntilChangedComponent {
  values$ = of(1, 1, 2, 2, 3, 3, 3, 2, 2).pipe(
    distinctUntilChanged(),
    concatMap(item => timer(1000).pipe(map(() => item)))
  )
}
