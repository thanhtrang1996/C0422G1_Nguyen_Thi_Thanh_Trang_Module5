import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerService} from "../../../service/customer.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer: Customer[] = [];
  customerF: Customer = {};
  page: number = 1;
  searchForm: FormGroup;
  searchObj: any = {
    name: '',
    email: ''
  }

  constructor(private customerService: CustomerService,
              private toastrService: ToastrService) {

  }

  ngOnInit() {
    this.getAllCustomer(this.searchObj);
    this.createSearchForm();
  }

  createSearchForm() {
    this.searchForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('')
    })
  }

  getAllCustomer(obj: any) {
    this.customerService.getAll(obj).subscribe(customer => {
      this.customer = customer;
    })
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(next => {
      this.getAllCustomer(this.searchObj);
      this.toastrService.success("Delete success !")
    }, error => {
      console.log(error);
    })
  }

  getInfoToModal(customers: Customer) {
    this.customerF = customers;
  }

  onSearch() {
    this.searchObj = this.searchForm.value;
    this.getAllCustomer(this.searchForm.value);
  }
}
