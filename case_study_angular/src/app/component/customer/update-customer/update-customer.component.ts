import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../model/customerType";
import {Customer} from "../../../model/customer";
import {CustomerService} from "../../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  id: number;
  customerType: CustomerType[] = [];
  customer: Customer;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private router :Router,
              private toastrService: ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap : ParamMap)=>{
      this.id = + paramMap.get('id');
    })
    this.customerTypeService.getAll().subscribe(data=>{
      this.customerType = data;
    })
  }

  ngOnInit() {
    this.getCustomer();
  }
  getCustomer(){
    this.customerService.findById(this.id).subscribe(data=>{
      this.customer = data;
    },error => {
      console.log(error)
    },()=>{
      this.updateCustomer()
    })
  }
  updateCustomer() {
    this.customerForm = new FormGroup({
      customerType : new FormControl(this.customer.customerType,),
      name : new FormControl(this.customer.name,[Validators.required,Validators.pattern("^[A-Z][a-z]+(\\s[A-Z][a-z]+)*$")]),
      dateOfBirth :new FormControl(this.customer.dateOfBirth,[Validators.required]),
      idCard :new FormControl(this.customer.idCard,[Validators.required,Validators.min(9),Validators.max(12)]),
      phone : new FormControl(this.customer.phone,[Validators.pattern("^(090|091|(84+)90|(84+)91)[0-9]{6}$")]),
      email : new FormControl(this.customer.email,[Validators.required,Validators.email]),
      address : new FormControl(this.customer.address,[Validators.required]),
      gender : new  FormControl(this.customer.gender),
      customerCode : new  FormControl(this.customer.customerCode,[Validators.required,Validators.pattern("^(KH-[0-9]+)$")])
    })
  }

  submit(id :number) {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id,customer).subscribe(()=>{
      this.router.navigateByUrl("/customer/list").then(()=>{
        this.toastrService.success('Update successful')
      })
    },error => {
      console.log(error);
    })
  }
  get email() {
    return this.customerForm.get('email');
  } get customerCode() {
    return this.customerForm.get('customerCode');
  }
  get nameCustomer() {
    return this.customerForm.get('name');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

  get phone() {
    return this.customerForm.get('phone');
  }

}
