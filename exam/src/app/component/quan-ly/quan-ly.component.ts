import {Component, OnInit} from '@angular/core';
import {QuanLyService} from '../../service/quan-ly.service';
import {QuanLy} from '../../model/quanLy';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-quan-ly',
  templateUrl: './quan-ly.component.html',
  styleUrls: ['./quan-ly.component.css']
})
export class QuanLyComponent implements OnInit {
  quanLy: QuanLy[] = [];
  id: number;
  deleteQuanLy: QuanLy = {};
  page = 0
  totalPage: number

  constructor(private quanLyService: QuanLyService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll(this.page);
  }



  delete(id: number) {
    this.quanLyService.delete(id).subscribe(next => {
      this.toastrService.success('Xoá thành công');
      this.getAll(this.page);
    });
  }

  getInfoToModal(quanLy: QuanLy) {
    this.deleteQuanLy = quanLy;
  }

  getAll(numberPage: number) {

    this.page = numberPage
    if (this.page <0){
      this.page = 0
    }
    else {
      if (this.page>this.totalPage){
        this.page = this.totalPage - 1
      }
    }
    this.quanLyService.getAll(this.page).subscribe(quanLy=>{
      this.quanLy = quanLy.content
      this.totalPage = quanLy.totalPage
    })
  }
 }
