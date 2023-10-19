import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarConfigurationComponent } from './search-bar-configuration.component';

describe('SearchBarConfigurationComponent', () => {
  let component: SearchBarConfigurationComponent;
  let fixture: ComponentFixture<SearchBarConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarConfigurationComponent]
    });
    fixture = TestBed.createComponent(SearchBarConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
