import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHtmlTypescriptComponent } from './select-html-typescript.component';

describe('SelectHtmlTypescriptComponent', () => {
  let component: SelectHtmlTypescriptComponent;
  let fixture: ComponentFixture<SelectHtmlTypescriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectHtmlTypescriptComponent]
    });
    fixture = TestBed.createComponent(SelectHtmlTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
