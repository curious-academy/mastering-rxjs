import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, mergeMap, of, retry, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-retry',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './retry.component.html',
  styleUrl: './retry.component.css'
})
export class RetryComponent {
  retryUse$ = of(1, 2, 3, 4, 5).pipe(
    mergeMap(item => item > 3 ? throwError(() => new Error('Cheat happens')) : of(item)),
    retry(2),
    tap({next: item => console.info('tap', item)}),
    catchError(err => of(100))
  )
}
