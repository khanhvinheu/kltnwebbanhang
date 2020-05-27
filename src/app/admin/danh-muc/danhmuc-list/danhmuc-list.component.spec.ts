import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucListComponent } from './danhmuc-list.component';

describe('DanhmucListComponent', () => {
  let component: DanhmucListComponent;
  let fixture: ComponentFixture<DanhmucListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhmucListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
