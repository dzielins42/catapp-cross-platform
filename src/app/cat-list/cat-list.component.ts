import { Component, OnInit } from '@angular/core';

import { CatFactsApiService } from '../cat-facts-api.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  constructor(private catFactsApiService: CatFactsApiService) { }

  ngOnInit() {
    this.catFactsApiService.getCatFacts(5).subscribe(
      catFact => console.log(catFact),
      error => {},
      () => {}
    );
  }

}
