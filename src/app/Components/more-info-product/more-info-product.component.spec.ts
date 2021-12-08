import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoProductComponent } from './more-info-product.component';

describe('MoreInfoProductComponent', () => {
  let component: MoreInfoProductComponent;
  let fixture: ComponentFixture<MoreInfoProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInfoProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
