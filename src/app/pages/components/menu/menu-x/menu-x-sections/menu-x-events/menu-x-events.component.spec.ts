import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuXEventsComponent } from './menu-x-events.component';

describe('MenuXEventsComponent', () => {
  let component: MenuXEventsComponent;
  let fixture: ComponentFixture<MenuXEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuXEventsComponent]
    });
    fixture = TestBed.createComponent(MenuXEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
