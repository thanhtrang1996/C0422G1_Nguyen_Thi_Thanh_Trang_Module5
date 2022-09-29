import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  constructor() {

  }
  createForm(){
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
    this.createForm()
  }

  onSummit() {
    console.log(this.userForm)
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
    else {
      console.log('error');
    }
  }
  get email() {
    return this.userForm.get('email');
  }
 get password() {
    return this.userForm.get('password');
  }

}
