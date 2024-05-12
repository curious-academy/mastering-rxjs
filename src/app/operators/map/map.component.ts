import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { concatMap, delay, map, of, timer } from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  mapUse$ = of(1, 2, 3, 5).pipe(
    map((value, index) => value *2),
    concatMap(item => timer(1000).pipe(map(() => item)))
  );
}
