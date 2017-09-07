import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CatImagesService {

  constructor(private http: Http) { }

  getCatImages(count : number) : Observable<string> {
    return this.http.get(
      'http://thecatapi.com/api/images/get?format=xml&size=med&results_per_page=' + count
    )
    .map(response => {
      let parser = new DOMParser();
      let xmlData = parser.parseFromString(response.text(), "application/xml");
      console.log(
        xmlData.documentElement.nodeName == "parsererror" ? "error while parsing" : "parsing OK"
      );
      return xmlData.getElementsByTagName("url");
    })
    .flatMap(urlNodes => Observable.from(urlNodes))
    .map(urlNode => urlNode.textContent);
  }

}
