import { TestBed } from '@angular/core/testing';

import { ReposrtService } from './reposrt.service';

describe('ReposrtService', () => {
  let service: ReposrtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposrtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
