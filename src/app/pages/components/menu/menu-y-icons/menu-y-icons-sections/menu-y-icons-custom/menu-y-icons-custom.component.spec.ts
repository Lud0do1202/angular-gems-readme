import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuYIconsCustomComponent } from './menu-y-icons-custom.component';

describe('MenuYIconsCustomComponent', () => {
  let component: MenuYIconsCustomComponent;
  let fixture: ComponentFixture<MenuYIconsCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuYIconsCustomComponent]
    });
    fixture = TestBed.createComponent(MenuYIconsCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
