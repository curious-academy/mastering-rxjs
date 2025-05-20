import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { delay, of, startWith, concatMap, timer, map } from 'rxjs';

@Component({
  selector: 'app-start-with',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './start-with.component.html',
  styleUrl: './start-with.component.css'
})
export class StartWithComponent {

  numbers$ = of(1, 2, 3, 4, 5);

  numbersWithZero$ = this.numbers$.pipe(startWith(0));

  numbersWithZeroAndOne$ = this.numbers$.pipe(startWith(0, 1));

  numbersWithZeroAndOneAndDelay$ = this.numbers$.pipe(
    startWith(0),
    concatMap(item => timer(1000).pipe(map(() => item)))
  );
}
