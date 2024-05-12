import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.css'
})
export class TapComponent {
  tapUse$ = of([1,2,3]).pipe(
    tap({
      next: items => console.info('tap', items),
      complete: () => console.info('complete'),
      subscribe: () => console.info('subscribe')
    })
  )
}
