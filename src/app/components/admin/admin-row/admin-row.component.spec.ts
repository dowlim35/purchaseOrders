import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRowComponent } from './admin-row.component';

describe('AdminRowComponent', () => {
  let component: AdminRowComponent;
  let fixture: ComponentFixture<AdminRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
