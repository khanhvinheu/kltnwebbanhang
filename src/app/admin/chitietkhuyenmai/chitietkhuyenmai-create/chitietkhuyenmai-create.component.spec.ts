import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietkhuyenmaiCreateComponent } from './chitietkhuyenmai-create.component';

describe('ChitietkhuyenmaiCreateComponent', () => {
  let component: ChitietkhuyenmaiCreateComponent;
  let fixture: ComponentFixture<ChitietkhuyenmaiCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietkhuyenmaiCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietkhuyenmaiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
