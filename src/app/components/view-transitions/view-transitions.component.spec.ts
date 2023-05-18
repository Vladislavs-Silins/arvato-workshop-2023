import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransitionsComponent } from './view-transitions.component';

describe('ViewTransitionsComponent', () => {
  let component: ViewTransitionsComponent;
  let fixture: ComponentFixture<ViewTransitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTransitionsComponent]
    });
    fixture = TestBed.createComponent(ViewTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
