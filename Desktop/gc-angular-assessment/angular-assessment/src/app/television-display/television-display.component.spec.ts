import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionDisplayComponent } from './television-display.component';

describe('TelevisionDisplayComponent', () => {
  let component: TelevisionDisplayComponent;
  let fixture: ComponentFixture<TelevisionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelevisionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
