import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtttEditComponent } from './pttt-edit.component';

describe('PtttEditComponent', () => {
  let component: PtttEditComponent;
  let fixture: ComponentFixture<PtttEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtttEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtttEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
