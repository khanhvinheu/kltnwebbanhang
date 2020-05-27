import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucAddComponent } from './danhmuc-add.component';

describe('DanhmucAddComponent', () => {
  let component: DanhmucAddComponent;
  let fixture: ComponentFixture<DanhmucAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhmucAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
