import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtttCreateComponent } from './pttt-create.component';

describe('PtttCreateComponent', () => {
  let component: PtttCreateComponent;
  let fixture: ComponentFixture<PtttCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtttCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtttCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
