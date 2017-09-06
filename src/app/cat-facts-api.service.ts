import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CatFactsApiService {

  private _headers: Headers  = new Headers({'X-Requested-With': 'XMLHttpRequest'});

  constructor(private http: Http) { }

  getCatFacts(count : number) : Observable<string> {
    return this.http.get(
      'https://cors-anywhere.herokuapp.com/https://catfact.ninja/facts?limit=' + count,
      { headers: this._headers }
    )
    .flatMap(response => Observable.from(response.json().data))
    .map(data => data["fact"])
  }

}
