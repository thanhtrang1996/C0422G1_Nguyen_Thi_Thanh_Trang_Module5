import { Component, OnInit } from '@angular/core';
import {Contract} from "./contract";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
contract : Contract[] = [
  {id:0,facility:'Villa',customerName:'Lê Văn Hùng',startDate:'12-09-2001',endDate:'23-11-2001',deposit:2,total:'23424566'},
  {id:1,facility:'House',customerName:'Quang Văn Sách',startDate:'23-09-2002',endDate:'23-11-2002',deposit:3,total:'44664566'},
  {id:2,facility:'Room',customerName:' Hùng Thái Lê',startDate:'09-03-2001',endDate:'12-5-2001',deposit:4,total:'54353566'},
  {id:3,facility:'Villa',customerName:'Tâm Hùng',startDate:'12-09-2001',endDate:'23-11-2001',deposit:2,total:'23424566'},
  {id:4,facility:'Room',customerName:'Văn Võ Song Toàn',startDate:'11-11-2011',endDate:'29-12-2011',deposit:1,total:'44444566'},
  {id:5,facility:'Villa',customerName:'Lê Thi Tâm',startDate:'09-09-2008',endDate:'23-11-2008',deposit:2,total:'28888566'},
]
  constructor() { }

  ngOnInit() {
  }

}
