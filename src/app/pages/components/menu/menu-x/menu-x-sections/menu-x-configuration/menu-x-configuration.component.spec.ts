import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuXConfigurationComponent } from './menu-x-configuration.component';

describe('MenuXConfigurationComponent', () => {
  let component: MenuXConfigurationComponent;
  let fixture: ComponentFixture<MenuXConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuXConfigurationComponent]
    });
    fixture = TestBed.createComponent(MenuXConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
