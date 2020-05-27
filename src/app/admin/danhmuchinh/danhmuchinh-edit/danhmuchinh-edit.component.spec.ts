import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmuchinhEditComponent } from './danhmuchinh-edit.component';

describe('DanhmuchinhEditComponent', () => {
  let component: DanhmuchinhEditComponent;
  let fixture: ComponentFixture<DanhmuchinhEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhmuchinhEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmuchinhEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
