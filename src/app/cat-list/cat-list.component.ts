import { Component, OnInit } from '@angular/core';

import { CatInfoService, CatInfo } from '../services/cat-info.service';

import 'rxjs/add/operator/toArray';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  catInfoArray: CatInfo[];

  constructor(
    private catInfoService: CatInfoService
  ) { }

  ngOnInit() {
    this.catInfoService.getCatInfo(15)
    .toArray()
    .subscribe(
      catInfoArray => {
        this.catInfoArray = catInfoArray;
        console.log(this.catInfoArray);
      },
      error => {},
      () => {}
    );
  }

}
