import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftArchiveComponent } from './draft-archive.component';

describe('DraftArchiveComponent', () => {
  let component: DraftArchiveComponent;
  let fixture: ComponentFixture<DraftArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
