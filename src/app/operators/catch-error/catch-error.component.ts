import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, map, of, throwError } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  standalone: true,
  imports: [AsyncPipe],

  templateUrl: './catch-error.component.html',
  styleUrl: './catch-error.component.css'
})
export class CatchErrorComponent {
  source$ = throwError(() => new Error('Bad error'))
  //catchErrorUse$ = this.source$.pipe(catchError(error => of(error)));

  catchErrorUse$ = of(1, 2, 3, 4, 5).pipe(
    map(item => {
      if(item === 4) { throw item }

      return item
    }),
    catchError(item => of(item)),
    map(item => item * 2)
  )
}
