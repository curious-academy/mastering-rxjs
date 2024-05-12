import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { concatMap, interval, map, of, scan, timer } from 'rxjs';

@Component({
  selector: 'app-scan',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './scan.component.html',
  styleUrl: './scan.component.css'
})
export class ScanComponent {
  // scanUse$ = of(1, 2, 3).pipe(
  //   scan((acc, value, index) => acc + value, 0),
  //   concatMap(item => timer(1000).pipe(map(() => item)))
  // )

  numbers: number[] = [];

  scanUse$ = interval(1000).pipe(
    scan((acc, value) => [...acc, value], this.numbers),
    concatMap(item => timer(1000).pipe(map(() => item)))
  )
}
