import { Component, OnInit } from '@angular/core';
import { Television } from '../television';

@Component({
  selector: 'app-television-display',
  templateUrl: './television-display.component.html',
  styleUrls: ['./television-display.component.css']
})
export class TelevisionDisplayComponent implements OnInit {

  televisions: Television[];

  constructor() { }

  ngOnInit(): void {
    this.televisions = [
      {name: 'Samsung', size: 65, smart: true},
      {name: 'Sony', size: 75, smart: false},
      {name: 'Hisense', size: 55, smart: true}
    ];
  }

  removeTv(x: Television) {
    const tvIndex = this.televisions.indexOf(x);
    this.televisions.splice(tvIndex, 1);
  }

}
