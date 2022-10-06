import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../model/product';
import {FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  deleteProduct: Product = {};
  id: number;
  page: number = 1;
  searchForm: FormGroup;
  searchObj: any = {
    name: '',
    price: '',


  }

  constructor(private productService: ProductService,
              private toastrService: ToastrService) {

  }

  ngOnInit() {
    this.getAllProduct(this.searchObj);
    this.createFormProduct();
  }

  getAllProduct(obj: any) {
    this.productService.getAll(obj).subscribe(product => {
      this.products = product
    });
  }

  createFormProduct() {
    this.searchForm = new FormGroup({
      name: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl('')
    })
  }

  delete(id: number) {
    this.productService.deleteProduct(id).subscribe(next => {
      this.toastrService.success("Xoá thành công")
      this.getAllProduct(this.searchObj);
    });
  }


  getInfoToModal(product: Product) {
    this.deleteProduct = product
  }

  onSearch() {
    this.searchObj = this.searchForm.value;
    this.getAllProduct(this.searchForm.value);

  }
}
