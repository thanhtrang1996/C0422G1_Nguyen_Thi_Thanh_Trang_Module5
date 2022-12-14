import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  category: Category[] = [];
  productF: Product

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService,
              private toastrService: ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    })
    this.categoryService.getAll().subscribe(data => {
      this.category = data;
    });
  }

  updateForm() {
    this.productForm = new FormGroup({
        name: new FormControl(this.productF.name),
        price: new FormControl(this.productF.price),
        description: new FormControl(this.productF.description),
        category: new FormControl(this.productF.category.id),
      }
    )
  }

  getOldProduct() {
    this.productService.findById(this.id).subscribe(data => {
      this.productF = data;
    }, error => {

    }, () => {
      this.updateForm()
    })
  }

  ngOnInit() {
    this.getOldProduct();
  }


  submit(id: number) {
    if (this.productForm.valid) {
      this.categoryService.findById(this.productForm.value.category).subscribe(data => {
        this.productForm.value.category = data;
        const product = this.productForm.value;
        this.productService.updateProduct(id, product).subscribe(() => {
          this.router.navigateByUrl("/product/list").then(() => {
            this.toastrService.success("C???p nh???t th??nh c??ng")
          });
        }, error => {
          console.log(error)
        });
      })
    } else {
      this.toastrService.warning("B???n ph???i nh???p ????ng")
    }

  }
}
