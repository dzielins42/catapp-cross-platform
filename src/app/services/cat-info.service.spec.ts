import { TestBed, inject } from '@angular/core/testing';

import { CatInfoService } from './cat-info.service';

describe('CatInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatInfoService]
    });
  });

  it('should be created', inject([CatInfoService], (service: CatInfoService) => {
    expect(service).toBeTruthy();
  }));
});
