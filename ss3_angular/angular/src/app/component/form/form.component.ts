import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Country} from "./country";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  customerForm: FormGroup;
  countries: Country[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.createCountries();
    this.createForm();
  }

  createCountries() {
    this.countries.push(
      {id: 1, name: "Quảng trị"},
      {id: 2, name: "Đà Nẵng"},
      {id: 3, name: "Bình Định"},
    )
  }

  createForm() {
    this.customerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password : new FormGroup({
        pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required]),
      },[comparePassword]),
      country: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^\\84\\d{9,10}$")]),
    })
  }

  onSummit() {
    console.log(this.customerForm)
    if (this.customerForm.valid) {
      console.log(this.customerForm.value)
    } else {
      console.log("Error")
    }
  }

  get email() {
    return this.customerForm.get('email');
  }

  get country() {
    return this.customerForm.get('country');
  }

  get age() {
    return this.customerForm.get('age');
  }

  get phone() {
    return this.customerForm.get('phone');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

}
function comparePassword(c:AbstractControl) {
  const value = c.value;
if (value.pass === value.confirmPassword) {
  return null;
}else {return {"passwordNotMath": true}  }


}
