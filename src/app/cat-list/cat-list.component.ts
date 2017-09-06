import { Component, OnInit } from '@angular/core';

import { CatFactsService } from '../cat-facts.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  constructor(private catFactsService: CatFactsService) { }

  ngOnInit() {
    this.catFactsService.getCatFacts(5).subscribe(
      catFact => console.log(catFact),
      error => {},
      () => {}
    );
  }

}
