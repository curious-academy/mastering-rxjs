import { Component } from '@angular/core';
import { fromEvent, interval, map, reduce, takeUntil } from 'rxjs';

@Component({
  selector: 'app-reduce',
  standalone: true,
  imports: [],
  templateUrl: './reduce.component.html',
  styleUrl: './reduce.component.css'
})
export class ReduceComponent {
  ngOnInit(): void {

    const clicksInFiveSeconds = fromEvent(document, 'click')
      .pipe(takeUntil(interval(5000)));

    const ones = clicksInFiveSeconds.pipe(map(() => 1));
    const seed = 0;
    const count = ones.pipe(reduce((acc, one) => acc + one, seed));

    count.subscribe(x => console.log(x));
  }
}
