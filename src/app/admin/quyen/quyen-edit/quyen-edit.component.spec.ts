import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuyenEditComponent } from './quyen-edit.component';

describe('QuyenEditComponent', () => {
  let component: QuyenEditComponent;
  let fixture: ComponentFixture<QuyenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuyenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuyenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
