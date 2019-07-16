import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveRowComponent } from './archive-row.component';

describe('ArchiveRowComponent', () => {
  let component: ArchiveRowComponent;
  let fixture: ComponentFixture<ArchiveRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
