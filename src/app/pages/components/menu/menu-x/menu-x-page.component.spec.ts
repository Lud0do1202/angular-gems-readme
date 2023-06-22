import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuXPageComponent } from './menu-x-page.component';

describe('MenuXPageComponent', () => {
  let component: MenuXPageComponent;
  let fixture: ComponentFixture<MenuXPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuXPageComponent],
    });
    fixture = TestBed.createComponent(MenuXPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
