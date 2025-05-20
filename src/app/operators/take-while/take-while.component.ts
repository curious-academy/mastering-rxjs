import { Component } from '@angular/core';
import { of, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  standalone: true,
  imports: [],
  templateUrl: './take-while.component.html',
  styleUrl: './take-while.component.css'
})
export class TakeWhileComponent {
  take$ = of(1, 2, 3, 4, 5).pipe(
    takeWhile(x => x < 4)
  ).subscribe(console.log);
}
