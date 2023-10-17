import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionImportComponent } from './section-import.component';

describe('SectionImportComponent', () => {
  let component: SectionImportComponent;
  let fixture: ComponentFixture<SectionImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionImportComponent]
    });
    fixture = TestBed.createComponent(SectionImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
