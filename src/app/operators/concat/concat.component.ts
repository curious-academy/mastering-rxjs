import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { concat, concatMap, delay, map, of, startWith, timer } from 'rxjs';

@Component({
  selector: 'app-concat',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './concat.component.html',
  styleUrl: './concat.component.css'
})
export class ConcatComponent {
  a$ = of('A1', 'A2').pipe(delay(1000));
  b$ = of('B1', 'B2');
  
  result$ = concat(this.a$, this.b$).pipe(
    startWith('Start'),
    concatMap(item => timer(1000).pipe(map(() => item)))
  );
}
