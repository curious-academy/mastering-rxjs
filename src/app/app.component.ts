import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export type CallBackAvecString = (message: string) => void;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  observable$ !: Observable<string>;
  private subscription = new Subscription();

ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

  ngOnInit(): void {
    console.info('--------------');

    const callBack: CallBackAvecString = mess => console.info(mess.toUpperCase());

    // EAGER
    const promise = new Promise<string>((resolve, reject) => {
      console.info('0. PROMISE'); // SYNC

      setTimeout(() => {
        resolve('P => STAR WARS'); // ASYNC
      }, 0);
    }).then(callBack);

    // LAZY
    this.observable$ = new Observable<string>(observer => {
      console.info('0. OBSERVABLE'); // SYNC

      observer.next('O => STAR WARS'); // SYNC
      setTimeout(() => {
        observer.next('O1 => STAR WARS'); // ASYNC
        console.info('O. je passe bien là')
        observer.complete();// ASYNC
      }, 1500);
      //observer.complete();// SYNC
    });
    let sub = this.observable$.subscribe({
      next: callBack,
      complete: () => console.info('0 => finish')
    });
    this.subscription.add(sub);

    this.observable$.pipe(takeUntilDestroyed()).subscribe({
      next: callBack,
      complete: () => console.info('0 => finish')
    });
    this.subscription.add(sub);

    console.info('**************');
  }
}
