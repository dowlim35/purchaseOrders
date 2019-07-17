import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftArchiveRowComponent } from './draft-archive-row.component';

describe('DraftArchiveRowComponent', () => {
  let component: DraftArchiveRowComponent;
  let fixture: ComponentFixture<DraftArchiveRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftArchiveRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftArchiveRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
