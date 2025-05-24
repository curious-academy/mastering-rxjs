import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  standalone: true,
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.css',
})
export class AsyncSubjectComponent {
  ngOnInit(): void {
    // const sub = new AsyncSubject<string>();
    // sub.subscribe(console.log);
    // console.log('sub1');

    // sub.next('123'); //nothing logged

    // sub.subscribe(console.log);
    // console.log('sub2');

    // sub.next('456'); //nothing logged
    // console.log('sub3');
    // sub.complete(); // logged here

    const renduPDF$ = new AsyncSubject<string>();

    // Simule des étapes intermédiaires
    renduPDF$.next('Préparation...');
    renduPDF$.next('Mise en page...');
    renduPDF$.next('✅ PDF généré');

    renduPDF$.complete(); // 🔥 Émet maintenant : "✅ PDF généré"

    renduPDF$.subscribe((val) => console.log('📄 PDF reçu :', val));
  }
}
