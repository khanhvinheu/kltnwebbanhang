import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhuongthucthanhtoanComponent } from './phuongthucthanhtoan.component';

describe('PhuongthucthanhtoanComponent', () => {
  let component: PhuongthucthanhtoanComponent;
  let fixture: ComponentFixture<PhuongthucthanhtoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhuongthucthanhtoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhuongthucthanhtoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
