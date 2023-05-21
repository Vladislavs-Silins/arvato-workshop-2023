import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvifComponent } from './avif.component';

describe('AvifComponent', () => {
  let component: AvifComponent;
  let fixture: ComponentFixture<AvifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvifComponent],
    });
    fixture = TestBed.createComponent(AvifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
