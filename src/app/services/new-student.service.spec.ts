import { TestBed } from '@angular/core/testing';

import { NewStudentService } from './new-student.service';

describe('NewStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewStudentService = TestBed.get(NewStudentService);
    expect(service).toBeTruthy();
  });
});
