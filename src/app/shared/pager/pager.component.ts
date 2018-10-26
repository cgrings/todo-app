import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Page } from '../../shared/page';
import { range } from 'rxjs';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {

  @Input() private pageable: Page<any>;

  constructor() { }

  ngOnInit() {
  }

  getPages(): Array<any> {
    var current:number = this.pageable.number + 1;
    var begin:number = 1;
    var end:number = this.pageable.totalPages + 1;
    const pages: Array<any> = new Array();
    for(var i = begin; i < end; i++) {
      pages.push({number: i, active: (current === i)});
    }
    return pages;
  }

  hasPrevious(): Boolean {
    return this.pageable.first;
  }
  getPreviousPageNumber(): number {
    return this.pageable.number;
  }

  hasNext(): Boolean {
    return this.pageable.last;
  }
  getNextPageNumber(): number {
    return this.pageable.number + 2;
  }
}
