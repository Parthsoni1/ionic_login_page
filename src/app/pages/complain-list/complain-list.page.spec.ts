import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainListPage } from './complain-list.page';

describe('ComplainListPage', () => {
  let component: ComplainListPage;
  let fixture: ComponentFixture<ComplainListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
