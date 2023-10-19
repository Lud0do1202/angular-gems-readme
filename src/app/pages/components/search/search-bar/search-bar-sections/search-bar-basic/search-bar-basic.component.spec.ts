import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarBasicComponent } from './search-bar-basic.component';

describe('SearchBarBasicComponent', () => {
  let component: SearchBarBasicComponent;
  let fixture: ComponentFixture<SearchBarBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarBasicComponent]
    });
    fixture = TestBed.createComponent(SearchBarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
