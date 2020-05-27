import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucEditComponent } from './danhmuc-edit.component';

describe('DanhmucEditComponent', () => {
  let component: DanhmucEditComponent;
  let fixture: ComponentFixture<DanhmucEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhmucEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
