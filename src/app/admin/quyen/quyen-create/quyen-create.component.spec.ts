import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuyenCreateComponent } from './quyen-create.component';

describe('QuyenCreateComponent', () => {
  let component: QuyenCreateComponent;
  let fixture: ComponentFixture<QuyenCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuyenCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuyenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
