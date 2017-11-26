import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CatImagesService {

  constructor(private http: Http) { }

  getCatImages(count : number) : Observable<string> {
    // randomrising does not work so use new for now
    return this.http.get(
      'https://www.reddit.com/r/catpictures/new.json?limit=' + count
    )
    .flatMap(response => Observable.from(response.json().data.children))
    .map(child => child["data"]["preview"]["images"][0]["resolutions"])
    .map(images => images.sort((a, b) => {
      let preferedValue = 960;
      return Math.abs(preferedValue - a["width"]) - Math.abs(preferedValue - b["width"]);
    }))
    .flatMap(images => Observable.from(images).first())
    .map(image => image["url"])
    .map(imageUrl => imageUrl.replace(/&amp;/g, "&"))
  }

}
