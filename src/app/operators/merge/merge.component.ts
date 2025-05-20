import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.css'
})
export class MergeComponent {
  a$ = interval(1000).pipe(map(i => `A${i}`), take(3));
  b$ = interval(500).pipe(map(i => `B${i}`), take(4));
  
  merge$ = merge(this.a$, this.b$)

  //emit every 2.5 seconds
  first$ = interval(2500);
  //emit every 1 second
  second$ = interval(1000);
  //used as instance method
  example$ = merge(this.first$, this.second$);
}
