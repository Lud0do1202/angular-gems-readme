import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuXBasicComponent } from './menu-x-basic.component';

describe('MenuXBasicComponent', () => {
  let component: MenuXBasicComponent;
  let fixture: ComponentFixture<MenuXBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuXBasicComponent]
    });
    fixture = TestBed.createComponent(MenuXBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
