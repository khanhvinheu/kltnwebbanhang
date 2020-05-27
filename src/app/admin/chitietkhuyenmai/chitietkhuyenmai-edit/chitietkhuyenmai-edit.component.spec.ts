import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietkhuyenmaiEditComponent } from './chitietkhuyenmai-edit.component';

describe('ChitietkhuyenmaiEditComponent', () => {
  let component: ChitietkhuyenmaiEditComponent;
  let fixture: ComponentFixture<ChitietkhuyenmaiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietkhuyenmaiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietkhuyenmaiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
