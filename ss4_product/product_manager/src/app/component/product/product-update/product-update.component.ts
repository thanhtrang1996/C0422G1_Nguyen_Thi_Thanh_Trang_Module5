import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;
  productForm: FormGroup;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        this.product = this.productService.findById(parseInt(id))
      }
    })
  }
updateForm(){
  this.productForm = new FormGroup({
    id: new FormControl(this.product.id  ),
    name: new FormControl(this.product.name),
    price: new FormControl(this.product.price ),
    description: new FormControl(this.product.description ),
  });
}

  ngOnInit() {
    this.updateForm();
  }

  submit() {
    const product = this.productForm.value;
    this.productService.updateProduct(product);
    this.router.navigateByUrl("");
  }
}
