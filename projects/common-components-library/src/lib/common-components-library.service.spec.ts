import { TestBed } from '@angular/core/testing';

import { CommonComponentsLibraryService } from './common-components-library.service';

describe('CommonComponentsLibraryService', () => {
  let service: CommonComponentsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonComponentsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
