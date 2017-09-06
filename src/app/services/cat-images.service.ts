import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/repeat';

@Injectable()
export class CatImagesService {

  constructor() { }

  getCatImages(count : number) : Observable<string> {
    return Observable.of("http://25.media.tumblr.com/tumblr_lrgxfpNoNz1qao8ddo1_500.jpg").repeat(count);
  }

}
