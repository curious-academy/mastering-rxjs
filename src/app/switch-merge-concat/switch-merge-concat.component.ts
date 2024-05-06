import { AsyncPipe } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { concatMap, delay, filter, fromEvent, interval, map, mergeMap, Observable, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-switch-merge-concat',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './switch-merge-concat.component.html',
  styleUrl: './switch-merge-concat.component.css'
})
export class SwitchMergeConcatComponent {
  btnStart = viewChild.required<ElementRef<HTMLButtonElement>>('btnStart');
  //@ViewChild('btnStart', {static: true}) btnStart !: ElementRef<HTMLButtonElement>;
  click$!: Observable<number>;
  enfant$ = interval(1000)//.pipe(take(10));

  ngOnInit(): void {
    this.click$ = fromEvent(this.btnStart().nativeElement, 'click')
                  .pipe(
                      tap(item => console.info(item)),
                      //map(evt => interval(1000))
                      switchMap(item => this.enfant$),
                      tap(item => console.info(item)),
                      filter(tick => tick % 2 === 0)
                      //map(tick => tick * 2)
                  );

    // this.click$.subscribe({
    //   next: tick => {
    //     interval(1000).subscribe(item => console.info(item))
    //   }
    // })

    // this.click$
    // .pipe(
    //   tap(item => console.info(item)),
    //   map(evt => interval(1000))
    // )
    // .subscribe({
    //   next: tick => tick.subscribe(item => console.info(item))
    // })



    // this.click$
    // .subscribe({
    //   next: tick => console.info('time : ', tick)
    // })
  }
}
