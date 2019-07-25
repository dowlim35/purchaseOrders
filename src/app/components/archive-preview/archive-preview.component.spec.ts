import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePreviewComponent } from './archive-preview.component';

describe('ArchivePreviewComponent', () => {
  let component: ArchivePreviewComponent;
  let fixture: ComponentFixture<ArchivePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
