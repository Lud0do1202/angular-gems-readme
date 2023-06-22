import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnationPageComponent } from './donnation-page.component';

describe('DonnationPageComponent', () => {
  let component: DonnationPageComponent;
  let fixture: ComponentFixture<DonnationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonnationPageComponent],
    });
    fixture = TestBed.createComponent(DonnationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
