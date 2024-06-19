import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMultiPagesComponent } from './request-multi-pages.component';

describe('RequestMultiPagesComponent', () => {
  let component: RequestMultiPagesComponent;
  let fixture: ComponentFixture<RequestMultiPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestMultiPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestMultiPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
