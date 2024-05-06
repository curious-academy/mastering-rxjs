import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TitreService } from './services/titre.service';

export type CallBackAvecString = (message: string) => void;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  observable$ = inject(TitreService).selectOne();
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
    let sub = this.observable$.subscribe({
      next: callBack,
      complete: () => console.info('0 => finish')
    });
    this.subscription.add(sub);

    this.observable$.subscribe({
      next: callBack,
      complete: () => console.info('0 => finish')
    });
    this.subscription.add(sub);

    console.info('**************');
  }
}
