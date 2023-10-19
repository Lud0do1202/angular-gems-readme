import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarPageComponent } from './search-bar-page.component';

describe('SearchBarPageComponent', () => {
  let component: SearchBarPageComponent;
  let fixture: ComponentFixture<SearchBarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarPageComponent]
    });
    fixture = TestBed.createComponent(SearchBarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
