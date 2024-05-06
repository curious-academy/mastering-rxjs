import { Injectable } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { filter, map, Observable, shareReplay, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class TitreService {
  private readonly observable$ = new Observable<string>(observer => {
    console.info('0. OBSERVABLE'); // SYNC

    observer.next('O => STAR WARS'); // SYNC
    setTimeout(() => {
      observer.next('O1 => STAR WARS'); // ASYNC
      console.info('O. je passe bien là');
      observer.complete();// ASYNC
    }, 1500);
    //observer.complete();// SYNC
  }).pipe(
    takeUntilDestroyed(),
    tap(val => console.info('TAP => val : ', val)),
    map(val => val.substring(0, 4)),
    //filter(val => val.substring(0, 2) === 'O1'),
    map(val => val + '!!!!!'),
    tap(val => console.info('TAP 02 => val : ', val)),
    shareReplay(1)
  );

  selectOne(): Observable<string> {
    return this.observable$;

  }
}
