import { Component } from '@angular/core';
import { combineLatest, of, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  standalone: true,
  imports: [],
  templateUrl: './zip.component.html',
  styleUrl: './zip.component.css'
})
export class ZipComponent {
  ngOnInit() {
    const noms$ = of('Alice', 'Bob', 'Charlie');
    const points$ = of(10, 20, 30, 40, 50);

    zip(noms$, points$).subscribe(([nom, point]) => {
      console.log(`zip : ${nom} a marqué ${point} points`);
    });

    combineLatest([noms$, points$]).subscribe(([nom, point]) => {
      console.log(`combineLatest : ${nom} a marqué ${point} points`);
    });
  }
}
