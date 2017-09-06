import { TestBed, inject } from '@angular/core/testing';

import { CatImagesService } from './cat-images.service';

describe('CatImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatImagesService]
    });
  });

  it('should be created', inject([CatImagesService], (service: CatImagesService) => {
    expect(service).toBeTruthy();
  }));
});
