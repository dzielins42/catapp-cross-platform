import { Injectable } from '@angular/core';

import { CatFactsService } from './cat-facts.service';
import { CatImagesService } from './cat-images.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/zip';

@Injectable()
export class CatInfoService {

  constructor(
    private catFactsService: CatFactsService,
    private catImagesService: CatImagesService,
  ) { }

  getCatInfo(count : number) : Observable<CatInfo> {
    return Observable.zip(
      this.catFactsService.getCatFacts(count),
      this.catImagesService.getCatImages(count),
      (catFact, catImage) => new CatInfo(catFact, catImage)
    )
  }

}

export class CatInfo {

  public fact: string;
  public imageUrl: string;

  constructor(
    fact: string,
    imageUrl: string
  ) {
    this.fact = fact;
    this.imageUrl = imageUrl;
  }

}
