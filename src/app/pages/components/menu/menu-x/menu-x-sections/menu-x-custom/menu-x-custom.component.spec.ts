import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuXCustomComponent } from './menu-x-custom.component';

describe('MenuXCustomComponent', () => {
  let component: MenuXCustomComponent;
  let fixture: ComponentFixture<MenuXCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuXCustomComponent]
    });
    fixture = TestBed.createComponent(MenuXCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
