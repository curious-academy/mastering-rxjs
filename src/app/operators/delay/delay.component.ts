import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { delay, fromEvent, map, of, startWith, switchMap, tap, merge, timer } from 'rxjs';

@Component({
  selector: 'app-delay',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './delay.component.html',
  styleUrl: './delay.component.css'
})
export class DelayComponent {
  waiting$ = fromEvent(document, 'click').pipe(
    map(() => 'ok'),
    startWith(''),
    switchMap(msg =>
      merge(
        of(msg),
        timer(3000).pipe(map(() => 'toujours la'))
      )
    )
  )
}
