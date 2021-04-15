import { TestBed } from '@angular/core/testing';

import { CommonShareService } from './common-share.service';

describe('CommonShareService', () => {
  let service: CommonShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
