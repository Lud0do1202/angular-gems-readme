import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuYIconsConfigurationComponent } from './menu-y-icons-configuration.component';

describe('MenuYIconsConfigurationComponent', () => {
  let component: MenuYIconsConfigurationComponent;
  let fixture: ComponentFixture<MenuYIconsConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuYIconsConfigurationComponent]
    });
    fixture = TestBed.createComponent(MenuYIconsConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
