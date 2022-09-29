import { Component, OnInit } from '@angular/core';
import {Facility} from "./facility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility: Facility[] = [];

  constructor() {
    this.facility.push(
      {id: 0, name: 'Phòng hướng vườn xanh mát', area: 100, cost: 100000, maxPeople: 5, rentType: 'year',
        status: " Phòng thoáng mát đầy đủ tiện nghi. Và khu vườn được chiếu sáng lãng mạn.",
        numberOfFloors: 1,
        img: "https://hotel84.com/hotel84-images/product/photo/Furama-Resort-Danang11.jpg"},
      {id: 1, name: 'Phòng vip rộng rãi quang đãng', area: 200, cost: 100000, maxPeople: 5, rentType:  'month',
        status: "Phòng rộng rãi đầy đủ mọi thứ với không gian ấm cúng",
        numberOfFloors: 3,
        img: "https://hotel84.com/hotel84-images/product/photo/Furama-Resort-Danang12.jpg"},
      {id: 2, name: 'Phòng hướng cửa sổ nhà hàng xóm', area: 100, cost: 100000, maxPeople: 5, rentType:'hour',
       status: "Phòng này có thể nhìn sang phòng người khác nên khi ở thì phải cẩn thận. ",
        numberOfFloors: 2,
        img: "https://hotel84.com/hotel84-images/product/photo/Furama-Resort-Danang13.jpg"},
      {id: 3, name: 'Phòng view nhà gái xinh', area: 150, cost: 100000, maxPeople: 5, rentType: 'year',
        status: "gái hot girl nên phù hợp cho những bạn nam thích ngắm gái. Vào ban đêm, hồ bơi có gái.",
        numberOfFloors: 1,
        img: "https://sohanews.sohacdn.com/2018/10/15/photo-1-15396102537971877008816.jpg"},
      {id: 4, name: 'Phòng view nhà trai đẹp', area: 100, cost: 100000, maxPeople: 5, rentType: 'month',
        status: "trai ngầu nên phù hợp cho những bạn nam thích ngắm gái. Vào ban đêm, hồ bơi có trai",
        numberOfFloors: 1,
        img: "https://cdn.cet.edu.vn/wp-content/uploads/2019/04/khong-nen-chon-phong-cuoi.jpg"},
      {id: 5, name: 'Phòng view  đẹp mê hồn người', area: 220, cost: 100000, maxPeople: 5, rentType: 'month',
        status: "phong cảnh đẹp nên phù hợp cho những bạn  thích ngắm cảnh đẹp mê hồn",
        numberOfFloors: 6,
        img: "https://hotel84.com/hotel84-images/product/photo/Furama-Resort-Danang16.jpg"},
    )
  }
  ngOnInit() {
  }

}
