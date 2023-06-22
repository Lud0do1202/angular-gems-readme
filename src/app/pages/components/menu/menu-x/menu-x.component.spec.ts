import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuXComponent } from './menu-x.component';

describe('MenuXComponent', () => {
  let component: MenuXComponent;
  let fixture: ComponentFixture<MenuXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuXComponent]
    });
    fixture = TestBed.createComponent(MenuXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
