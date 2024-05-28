import { Component } from '@angular/core';
import { combineLatest, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  standalone: true,
  imports: [],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.css'
})
export class CombineLatestComponent {
  ngOnInit(): void {
    const weight$ = of(70, 72, 76, 79, 75);
    const height$ = of(1.76, 1.77, 1.78);
    const bmi$ = combineLatest([weight$, height$]).pipe(
      tap(([w,h]) => console.info(w, h)),
      map(([w, h]) => w / (h * h)),
    );
    bmi$.subscribe(x => console.log('BMI is ' + x));
  }
}
