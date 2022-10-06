import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {Route, Router} from "@angular/router";
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  category: Category[] = [];
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  constructor(private productService: ProductService,
              private router :Router,
              private categoryService : CategoryService,
              private toastrService :ToastrService) {
    this.categoryService.getAll().subscribe(data => {
      this.category = data;
    });
  }

  ngOnInit() {
  }


  submit() {
    if(this.productForm.valid){
      const product = this.productForm.value;
      this.productService.saveProduct(product).subscribe(()=>{
        this.router.navigateByUrl("/product/list").then(()=>{
          this.toastrService.success("Tạo mới thành công")
        });
      },error => {
        console.log(error)
      });
    }else {
      this.toastrService.warning("Bạn phải nhập đúng")
    }



  }
}
