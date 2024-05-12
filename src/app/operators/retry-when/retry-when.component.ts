import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { delayWhen, interval, map, retryWhen, tap, timer } from 'rxjs';

@Component({
  selector: 'app-retry-when',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './retry-when.component.html',
  styleUrl: './retry-when.component.css'
})
export class RetryWhenComponent {
  retryWhenUse$ = interval(1000).pipe(
    map(item => {
      if(item > 5) {
        throw item
      }
      return item
    }),
    retryWhen(errors => errors.pipe(tap({ next: err => console.info(err) }), delayWhen(val => timer(val * 1000))))
  )

}
