import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DiemDen} from '../../model/diemDen';
import {DiemDi} from '../../model/diemDi';
import {QuanLyService} from '../../service/quan-ly.service';
import {DiemDiService} from '../../service/diem-di.service';
import {DiemDenService} from '../../service/diem-den.service';
import { Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tao-moi',
  templateUrl: './tao-moi.component.html',
  styleUrls: ['./tao-moi.component.css']
})
export class TaoMoiComponent implements OnInit {
quanLyForm :FormGroup;
diemDen :DiemDen[] = [];
diemDi :DiemDi[] = [];
  constructor( private quanLyService:QuanLyService,
               private diemDiService:DiemDiService,
               private  diemDenService:DiemDenService,
               private router :Router,
               private toastrService:ToastrService) {
    this.diemDiService.getAllDiemDi().subscribe(data=>{
      this.diemDi = data;
    })
    this.diemDenService.getAllDiemDen().subscribe(data=>{
      this.diemDen = data;
    })
  }

  ngOnInit(): void {
    this.createForm();
  }
createForm(){
    this.quanLyForm = new FormGroup({
      soXe: new FormControl(),
      loaiXe: new FormControl('', [Validators.required]),
      tenNhaXe: new FormControl('', [Validators.required]),
      diemDi: new FormGroup({
        id: new FormControl('', [Validators.required])
      }),
      diemDen: new FormGroup({
        id: new FormControl('', [Validators.required])
      }),
      soDienThoai: new FormControl('', [Validators.required, Validators.pattern('^(090|091|(84+)90|(84+)91)[0-9]{6}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gioDi: new FormControl('', [Validators.required]),
      gioDen: new FormControl('', [Validators.required]),
      status: new FormControl('false', [Validators.required]),
    })
}

  submit() {
    console.log(this.quanLyForm.value);
    if (this.quanLyForm.valid){
     const quanLy = this.quanLyForm.value;
     this.quanLyService.add(quanLy).subscribe(()=>{
       this.router.navigateByUrl('').then(()=>{
         this.toastrService.success("Tạo mới thành công")
       })
     },error => {
       console.log(error);
     });
    } else {
      this.toastrService.warning("Bạn phải nhập đúng")
    }
  }
  get email() {
    return this.quanLyForm.get('email');
  }

  get soDienThoai() {
    return this.quanLyForm.get('soDienThoai');
  }
}
