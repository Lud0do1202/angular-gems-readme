import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuXDefaultActiveLinkComponent } from './menu-x-default-active-link.component';

describe('MenuXDefaultActiveLinkComponent', () => {
  let component: MenuXDefaultActiveLinkComponent;
  let fixture: ComponentFixture<MenuXDefaultActiveLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuXDefaultActiveLinkComponent]
    });
    fixture = TestBed.createComponent(MenuXDefaultActiveLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
