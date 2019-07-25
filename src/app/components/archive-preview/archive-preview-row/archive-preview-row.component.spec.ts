import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePreviewRowComponent } from './archive-preview-row.component';

describe('ArchivePreviewRowComponent', () => {
  let component: ArchivePreviewRowComponent;
  let fixture: ComponentFixture<ArchivePreviewRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivePreviewRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivePreviewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
