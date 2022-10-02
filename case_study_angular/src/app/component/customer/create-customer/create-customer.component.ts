import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {CustomerType} from "../../../model/customerType";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customerType: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private router: Router,
              private customerTypeService: CustomerTypeService,
              private toastrService: ToastrService) {
    this.customerTypeService.getAll().subscribe(data => {
      this.customerType = data;
    })
  }

  ngOnInit() {
    this.createCustomer();
  }

  createCustomer() {
    this.customerForm = new FormGroup({
      customerType: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-z]+(\\s[A-Z][a-z]+)*$")]),
      dateOfBirth: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(12)]),
      phone: new FormControl('', [Validators.pattern("^(090|091|(84+)90|(84+)91)[0-9]{6}$")]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      gender: new FormControl(),
      customerCode: new FormControl('', [Validators.required, Validators.pattern("^(KH-[0-9]+)$")])

    })
  }

  submit() {

    if (this.customerForm.valid) {
      const customer = this.customerForm.value;
      this.customerService.saveCustomer(customer).subscribe(next => {
        this.router.navigateByUrl('/customer/list').then(()=>{
          this.toastrService.success("Add new success !")
        });
      }, error => {
        console.log(error)
      })
    } else {
      this.toastrService.warning("Trang ngáo!")
    }
  }

  get email() {
    return this.customerForm.get('email');
  }

  get customerCode() {
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
