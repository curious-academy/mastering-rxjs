import { Component } from '@angular/core';
import { fromEvent, interval, Subject, switchMap, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-take-until',
  standalone: true,
  imports: [],
  templateUrl: './take-until.component.html',
  styleUrl: './take-until.component.css'
})
export class TakeUntilComponent {
  ngOnInit(): void {
    const source$ = interval(1000);
    const clicks$ = fromEvent(document, 'click');
    const result$ = source$.pipe(takeUntil(clicks$));

    // Exemple avec take
    // const intervalCount = interval(1000);
    // const takeFive = intervalCount.pipe(take(5));
    // takeFive.subscribe(x => console.log(x));
  }
}
