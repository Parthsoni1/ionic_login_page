import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainStatusPage } from './complain-status.page';

describe('ComplainStatusPage', () => {
  let component: ComplainStatusPage;
  let fixture: ComponentFixture<ComplainStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
