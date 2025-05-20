import { Component } from '@angular/core';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  standalone: true,
  imports: [],
  templateUrl: './fork-join.component.html',
  styleUrl: './fork-join.component.css'
})
export class ForkJoinComponent {
  ngOnInit() {
    const noms$ = of('Alice', 'Bob', 'Charlie');
    const points$ = of(10, 20, 30);

    forkJoin([noms$, points$]).subscribe(([nom, point]) => {
      console.log(`forkJoin : ${nom} a marqué ${point} points`);
    });
  }
}
