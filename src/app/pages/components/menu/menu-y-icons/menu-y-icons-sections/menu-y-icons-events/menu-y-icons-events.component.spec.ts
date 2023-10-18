import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuYIconsEventsComponent } from './menu-y-icons-events.component';

describe('MenuYIconsEventsComponent', () => {
  let component: MenuYIconsEventsComponent;
  let fixture: ComponentFixture<MenuYIconsEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuYIconsEventsComponent]
    });
    fixture = TestBed.createComponent(MenuYIconsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
