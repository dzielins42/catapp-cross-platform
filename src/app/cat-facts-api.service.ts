import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/repeat';

@Injectable()
export class CatFactsApiService {

  constructor() { }

  getCatFacts(count : number) : Observable<string> {
    return Observable.of("test cat fact").repeat(count);
  }

}
