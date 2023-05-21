import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransitionDemoComponent } from './view-transition-demo.component';

describe('ViewTransitionDemoComponent', () => {
  let component: ViewTransitionDemoComponent;
  let fixture: ComponentFixture<ViewTransitionDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTransitionDemoComponent],
    });
    fixture = TestBed.createComponent(ViewTransitionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
