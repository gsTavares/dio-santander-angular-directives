import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-attributes',
  templateUrl: './comp-attributes.component.html',
  styleUrls: ['./comp-attributes.component.css']
})
export class CompAttributesComponent implements OnInit {

  style: 'enable' | 'disable' = 'enable';
  backgroundColor: string = 'blue';
  textColor: string = 'white';
  item: string = '';
  itemList: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  changeStyle() {
    if(this.style === 'enable')
      this.style = 'disable';
    else
      this.style = 'enable';
  }

  addItem() {
    this.itemList.push(this.item);
  }

}
