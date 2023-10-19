import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarEventsComponent } from './search-bar-events.component';

describe('SearchBarEventsComponent', () => {
  let component: SearchBarEventsComponent;
  let fixture: ComponentFixture<SearchBarEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarEventsComponent]
    });
    fixture = TestBed.createComponent(SearchBarEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
