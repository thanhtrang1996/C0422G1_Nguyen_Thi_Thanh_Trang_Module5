import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {Route, Router} from "@angular/router";
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  category: Category[] = [];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  constructor(private productService: ProductService, private router :Router,private categoryService : CategoryService) {
    this.categoryService.getAll().subscribe(data => {
      this.category = data;
    });
  }

  ngOnInit() {
  }


  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(()=>{
      this.router.navigateByUrl("/product/list");
    },error => {
      console.log(error)
    });


  }
}
