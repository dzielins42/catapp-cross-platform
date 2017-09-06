import { Component, OnInit } from '@angular/core';

import { CatInfoService, CatInfo } from '../services/cat-info.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  constructor(
    private catInfoService: CatInfoService
  ) { }

  ngOnInit() {
    this.catInfoService.getCatInfo(5).subscribe(
      catInfo => console.log(catInfo),
      error => {},
      () => {}
    );
  }

}
