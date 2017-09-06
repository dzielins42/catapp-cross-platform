import { TestBed, inject } from '@angular/core/testing';

import { CatFactsApiService } from './cat-facts-api.service';

describe('CatFactsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatFactsApiService]
    });
  });

  it('should be created', inject([CatFactsApiService], (service: CatFactsApiService) => {
    expect(service).toBeTruthy();
  }));
});
