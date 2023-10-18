import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuYIconsBasicComponent } from './menu-y-icons-basic.component';

describe('MenuYIconsBasicComponent', () => {
  let component: MenuYIconsBasicComponent;
  let fixture: ComponentFixture<MenuYIconsBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuYIconsBasicComponent]
    });
    fixture = TestBed.createComponent(MenuYIconsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
