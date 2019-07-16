import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionButtonsComponent } from './progression-buttons.component';

describe('ProgressionButtonsComponent', () => {
  let component: ProgressionButtonsComponent;
  let fixture: ComponentFixture<ProgressionButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressionButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
