import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  deleteProduct :Product={};
  id : number;

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getAll().subscribe(product =>{
      this.products = product
    });
  }

  delete(id : number) {
 this.productService.deleteProduct(id).subscribe(next=>{
   this.ngOnInit()
 });
  }


  getInfoToModal(product: Product) {
    this.deleteProduct = product
  }
}
