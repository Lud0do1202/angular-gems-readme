import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardBtnComponent } from './clipboard-btn.component';

describe('ClipboardBtnComponent', () => {
  let component: ClipboardBtnComponent;
  let fixture: ComponentFixture<ClipboardBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClipboardBtnComponent]
    });
    fixture = TestBed.createComponent(ClipboardBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
