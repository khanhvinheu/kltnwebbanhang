import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmuchinhComponent } from './danhmuchinh.component';

describe('DanhmuchinhComponent', () => {
  let component: DanhmuchinhComponent;
  let fixture: ComponentFixture<DanhmuchinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhmuchinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmuchinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
