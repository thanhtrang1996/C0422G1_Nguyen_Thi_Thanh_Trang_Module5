import { Component, OnInit } from '@angular/core';
import {Product} from "./product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product : Product = {
  id: 1,
  name:'Keo Keo',
  price:234

}
  constructor() { }

  ngOnInit(): void {
  }

}
