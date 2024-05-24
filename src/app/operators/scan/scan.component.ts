import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { concatMap, delay, interval, map, of, scan, timer } from 'rxjs';
import { EmployeePerformance } from './models';

@Component({
  selector: 'app-scan',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './scan.component.html',
  styleUrl: './scan.component.css'
})
export class ScanComponent {
  // scanUse$ = of(1, 2, 3).pipe(
  //   scan((acc, value, index) => acc + value, 0),
  //   concatMap(item => timer(1000).pipe(map(() => item)))
  // )

  numbers: number[] = [];

  scanUse$ = interval(1000).pipe(
    scan((acc, value) => [...acc, value], this.numbers),
    concatMap(item => timer(1000).pipe(map(() => item)))
  )

  evaluations$ = of(
    { employeeId: 'E1', taskId: 'T1', score: 5 },
    { employeeId: 'E1', taskId: 'T2', score: 3 },
    { employeeId: 'E2', taskId: 'T3', score: 4 },
    { employeeId: 'E1', taskId: 'T4', score: 4 },
    { employeeId: 'E2', taskId: 'T5', score: 5 }
  ).pipe(delay(1000));

  data: Record<string, EmployeePerformance> = {};

  performances$ = this.evaluations$.pipe(
    scan((acc, evaluation) => {

      if(! this.data[evaluation.employeeId]){
        this.data[evaluation.employeeId] = {
          employeeId: evaluation.employeeId,
          taskCount: 0,
          totalScore: 0,
          weightedAverage: 0
        }
      }
      this.data[evaluation.employeeId].taskCount ++;

      return acc;
    }, this.data),
    map(record => {
      const content = [];

      for(let key in record) {
        content.push(record[key])
      }

      return content;
    }),
    concatMap(item => timer(1000).pipe(map(() => item)))
  )

}
