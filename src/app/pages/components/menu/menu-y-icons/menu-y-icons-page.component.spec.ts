import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuYIconsPageComponent } from './menu-y-icons-page.component';

describe('MenuYIconsPageComponent', () => {
  let component: MenuYIconsPageComponent;
  let fixture: ComponentFixture<MenuYIconsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuYIconsPageComponent]
    });
    fixture = TestBed.createComponent(MenuYIconsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
