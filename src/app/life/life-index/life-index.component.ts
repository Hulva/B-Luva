import { Component, OnInit } from '@angular/core';
import * as Muuri from 'Muuri';

@Component({
  selector: 'bluva-life-index',
  templateUrl: './life-index.component.html',
  styleUrls: ['./life-index.component.css']
})
export class LifeIndexComponent implements OnInit {
  grid: any;
  constructor() { }

  ngOnInit() {
    this.grid = new Muuri('.grid', {
      dragEnabled: true,
      dragContainer: document.body,
      // dragAxis: 'x',
      // dragAxis: 'y'
    });
  }

}
