import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { catchError, expand, mergeScan, Observable, of, scan } from 'rxjs';

type ApiResultItem = {
  name: string
};

type ApiResult = {
  next: string | null,
  previous: string | null,
  results: ApiResultItem[]
}

@Component({
  selector: 'app-request-multi-pages',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './request-multi-pages.component.html',
  styleUrl: './request-multi-pages.component.css'
})
export class RequestMultiPagesComponent {
  private readonly httpClient = inject(HttpClient);
  people$ = this.prepareRequestForPage(1).pipe(
    expand(response => {
      if(response.next) {
        const nextPageIndex = +response.next.replace('https://swapi.dev/api/people/?page=', '');
        return this.prepareRequestForPage(nextPageIndex);
      } else {
        const item: ApiResult = {
          next: null,
          previous: null,
          results: []
        }
        return of(item);
      }
    }),
    scan((accumulate, current) => accumulate.concat(current.results), [] as ApiResultItem[])
    //mergeScan((accumulate, current) => of(accumulate.concat(current.results)), [] as ApiResultItem[])
  );


  private prepareRequestForPage(pageIndex = 1): Observable<ApiResult> {
    return this.httpClient.get<ApiResult>(`https://swapi.dev/api/people?page=${pageIndex}`).pipe(
      catchError(() => of({ results: [], next: null, previous: null }))
    );
  }
}
