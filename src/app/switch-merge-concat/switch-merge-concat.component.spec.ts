import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMergeConcatComponent } from './switch-merge-concat.component';

describe('SwitchMergeConcatComponent', () => {
  let component: SwitchMergeConcatComponent;
  let fixture: ComponentFixture<SwitchMergeConcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchMergeConcatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchMergeConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
