import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasComponent } from './has.component';

describe('HasComponent', () => {
  let component: HasComponent;
  let fixture: ComponentFixture<HasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HasComponent],
    });
    fixture = TestBed.createComponent(HasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
