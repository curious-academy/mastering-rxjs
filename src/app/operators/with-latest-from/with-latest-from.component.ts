import { Component } from '@angular/core';
import { fromEvent, interval, map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  standalone: true,
  imports: [],
  templateUrl: './with-latest-from.component.html',
  styleUrl: './with-latest-from.component.css',
})
export class WithLatestFromComponent {
  ngOnInit(): void {
    // const source = interval(3000);
    // //emit every 1s
    // const secondSource = interval(1000);
    // const example = source.pipe(
    //   withLatestFrom(secondSource),
    //   map(([first, second]) => {
    //     return `First Source (3s): ${first} Second Source (1s): ${second}`;
    //   })
    // );

    // const subscribe = example.subscribe(val => console.log(val));

    const clic$ = fromEvent(document, 'click');

    // Flux secondaire (données contextuelles qui évoluent dans le temps)
    const secondes$ = interval(1000).pipe(map((i) => `⏱️ ${i} secondes`));

    // Chaque clic récupère la dernière valeur connue du timer
    clic$.pipe(withLatestFrom(secondes$)).subscribe(([event, timerVal]) => {
      console.log('🖱️ Clic détecté à :', timerVal);
    });
  }
}
