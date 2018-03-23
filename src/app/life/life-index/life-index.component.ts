import { Component, OnInit } from '@angular/core';

declare const Murri;

@Component({
  selector: 'bluva-life-index',
  templateUrl: './life-index.component.html',
  styleUrls: ['./life-index.component.css']
})
export class LifeIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onload = () => {
      var grid = new Murri('.grid', {
        dragEnabled: true,
        dragContainer: document.body
      });
    };
  }

}
