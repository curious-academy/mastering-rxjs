import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css'
})
export class ReplaySubjectComponent {

  ngOnInit() {
    const subject = new ReplaySubject<string>(2, 5000);
    subject.subscribe({
      next: (value) => console.log('Observer 1: ' + value),
    });
    subject.subscribe({
      next: (value) => console.log('Observer 2: ' + value),
    });
    subject.next('Hello');
    subject.next('World');
    subject.next('Hello');
  }
}
