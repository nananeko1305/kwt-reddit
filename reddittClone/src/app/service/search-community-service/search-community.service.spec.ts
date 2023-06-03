import { TestBed } from '@angular/core/testing';

import { SearchCommunityService } from './search-community.service';

describe('SearchCommunityService', () => {
  let service: SearchCommunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCommunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
