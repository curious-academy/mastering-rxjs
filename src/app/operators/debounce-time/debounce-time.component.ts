import { Component } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  standalone: true,
  imports: [],
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.css'
})
export class DebounceTimeComponent {
  ngOnInit(): void {
    const cliks$ = fromEvent(document, 'click');
    const results$ = cliks$.pipe(debounceTime(1000));

    results$.subscribe(item => console.info(item));
  }
}
