import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-attributes',
  templateUrl: './comp-attributes.component.html',
  styleUrls: ['./comp-attributes.component.css']
})
export class CompAttributesComponent implements OnInit {

  style: 'enable' | 'disable' = 'enable';

  constructor() { }

  ngOnInit(): void {
  }

  changeStyle() {
    if(this.style === 'enable')
      this.style = 'disable';
    else
      this.style = 'enable';
  }

}
