import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhuyenmaiCreateComponent } from './khuyenmai-create.component';

describe('KhuyenmaiCreateComponent', () => {
  let component: KhuyenmaiCreateComponent;
  let fixture: ComponentFixture<KhuyenmaiCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhuyenmaiCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhuyenmaiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
