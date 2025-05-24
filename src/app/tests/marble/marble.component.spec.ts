import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { MarbleComponent } from './marble.component';
import { combineLatest, map, zip } from 'rxjs';

fdescribe('MarbleComponent', () => {
  let component: MarbleComponent;
  let fixture: ComponentFixture<MarbleComponent>;
  let testScheduler: TestScheduler;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarbleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  fit('should valid zip timé', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const source1$ = cold('a|', {a: 1});
      const source2$ = cold('a-b--c|', {a: 'a', b: 'b', c: 'c'});
      const result$ = zip([source1$, source2$]);
      
      expectObservable(result$).toBe('a|', {
          a: [1, 'a'],
      });
    });
  });

  fit('should valid combineLatest timé', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const source1$ = cold('a|', {a: 1});
      const source2$ = cold('a-b--c|', {a: 'a', b: 'b', c: 'c'});
      const result$ = combineLatest([source1$, source2$]);
      
      expectObservable(result$).toBe('a-b--c|', {
        a: [1, 'a'],
        b: [1, 'b'],
        c: [1, 'c']
      });
    });
  });

  fit('should valid combineLatest', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const source1$ = cold('a|', {a: 1});
      const source2$ = cold('abc|', {a: 'a', b: 'b', c: 'c'});
      const result$ = combineLatest([source1$, source2$]);
      
      expectObservable(result$).toBe('abc|', {
        a: [1, 'a'],
        b: [1, 'b'],
        c: [1, 'c']
      });
    });
  });

  it('should marble first test run', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      // On remplace l'observable d'origine par un flux contrôlé
      const source$ = cold('-a-b-c|', {
        a: 0,
        b: 1,
        c: 2
      });

      // On simule la logique du composant (map)
      const result$ = source$.pipe(map(i => `Hello ${i}`));

      // On s’attend à ce que les messages sortent dans le bon ordre
      expectObservable(result$).toBe('-x-y-z|', {
        x: 'Hello 0',
        y: 'Hello 1',
        z: 'Hello 2'
      });
    });
  });
});
