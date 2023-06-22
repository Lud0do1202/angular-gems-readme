import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuYIconsComponent } from './menu-y-icons.component';

describe('MenuYIconsComponent', () => {
  let component: MenuYIconsComponent;
  let fixture: ComponentFixture<MenuYIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuYIconsComponent]
    });
    fixture = TestBed.createComponent(MenuYIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
