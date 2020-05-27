import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhuyenmaiEditComponent } from './khuyenmai-edit.component';

describe('KhuyenmaiEditComponent', () => {
  let component: KhuyenmaiEditComponent;
  let fixture: ComponentFixture<KhuyenmaiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhuyenmaiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhuyenmaiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
