import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLeftProductsComponent } from './menu-left-products.component';

describe('MenuLeftProductsComponent', () => {
  let component: MenuLeftProductsComponent;
  let fixture: ComponentFixture<MenuLeftProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLeftProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLeftProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
