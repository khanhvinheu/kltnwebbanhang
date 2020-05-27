import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmuchinhCreateComponent } from './danhmuchinh-create.component';

describe('DanhmuchinhCreateComponent', () => {
  let component: DanhmuchinhCreateComponent;
  let fixture: ComponentFixture<DanhmuchinhCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhmuchinhCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmuchinhCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
