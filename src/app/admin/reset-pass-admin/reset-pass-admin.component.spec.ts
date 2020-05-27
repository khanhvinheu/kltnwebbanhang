import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassAdminComponent } from './reset-pass-admin.component';

describe('ResetPassAdminComponent', () => {
  let component: ResetPassAdminComponent;
  let fixture: ComponentFixture<ResetPassAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPassAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
