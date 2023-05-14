import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasDivsComponent } from './has-divs.component';

describe('HasDivsComponent', () => {
  let component: HasDivsComponent;
  let fixture: ComponentFixture<HasDivsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HasDivsComponent]
    });
    fixture = TestBed.createComponent(HasDivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
