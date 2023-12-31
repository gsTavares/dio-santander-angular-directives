import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  products: string[] = [];
  menuType: string = 'not valid type';

  constructor() {
    this.products = [
      'mouse', 'keyboard', 'wire', 'power' 
    ]
   }

  ngOnInit(): void {
  }

  addProduct() {
    this.products.push('Gustavo');
  }

  removeProduct(i: number) {
    this.products.splice(i, 1);
  }

}
