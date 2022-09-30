import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerType} from "../../../model/customerType";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
customer : Customer[] = [];
  constructor() {
    this.customer.push(
      {id:0,name:'Lê Văn Hùng',dateOfBirth:'12-09-1998',gender:'Nam',idCard:'1187222342',phone:'092133211313',email:'hung@gamil.com',address:'Hải Phòng',customerType:{id:0,name:'gold'}},
      {id:1,name:'Trần Văn Nghĩa',dateOfBirth:'23-06-1996',gender:'Nam',idCard:'1232222342',phone:'0921666613',email:'nghia@gamil.com',address:'Hà Nội',customerType:{id:1,name:'member'}},
      {id:2,name:'Hoa Hao Han',dateOfBirth:'18-06-1996',gender:'Nữ',idCard:'12342342',phone:'0921666553',email:'hoahan@gamil.com',address:'Hà Nam',customerType:{id:1,name:'gold'}},
      {id:3,name:'Nguyễn Tấn Hoa',dateOfBirth:'09-09-1996',gender:'Nữ',idCard:'1232999342',phone:'09216423342',email:'hoa@gamil.com',address:'Quảng Bình',customerType:{id:2,name:'Diamond'}},
    )
  }

  ngOnInit() {
  }

}
