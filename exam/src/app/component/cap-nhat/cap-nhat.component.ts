import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DiemDi} from '../../model/diemDi';
import {DiemDen} from '../../model/diemDen';
import {QuanLy} from '../../model/quanLy';
import {QuanLyService} from '../../service/quan-ly.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DiemDenService} from '../../service/diem-den.service';
import {DiemDiService} from '../../service/diem-di.service';

@Component({
  selector: 'app-cap-nhat',
  templateUrl: './cap-nhat.component.html',
  styleUrls: ['./cap-nhat.component.css']
})
export class CapNhatComponent implements OnInit {
  quanLyForm: FormGroup;
  id: number;
  diemDi: DiemDi[] = [];
  diemDen: DiemDen[] = [];
  quanLy: QuanLy;

  constructor(private quanLyService: QuanLyService,
              private toastrService: ToastrService,
              private activatedRoute: ActivatedRoute,
              private diemDenService: DiemDenService,
              private diemDiService: DiemDiService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
    this.diemDiService.getAllDiemDi().subscribe(next => {
      this.diemDi = next;
    });
    this.diemDenService.getAllDiemDen().subscribe(data => {
      this.diemDen = data;
    });

  }

  ngOnInit(): void {
    this.getOldQuanLy();
  }

  updateForm() {
    this.quanLyForm = new FormGroup({
        id: new FormControl(this.id),
        soXe: new FormControl(this.quanLy.soXe),
        loaiXe: new FormControl(this.quanLy.loaiXe, [Validators.required]),
        tenNhaXe: new FormControl(this.quanLy.tenNhaXe, [Validators.required]),
        diemDi: new FormGroup({
          id: new FormControl(this.quanLy.diemDi.id, [Validators.required])
        }),
        diemDen: new FormGroup({
          id: new FormControl(this.quanLy.diemDen.id, [Validators.required])
        }),
        soDienThoai: new FormControl(this.quanLy.soDienThoai, [Validators.required, Validators.pattern('^(090|091|(84+)90|(84+)91)[0-9]{6}$')]),
        email: new FormControl(this.quanLy.email, [Validators.required, Validators.email]),
        gioDi: new FormControl(this.quanLy.gioDi, [Validators.required]),
        gioDen: new FormControl(this.quanLy.gioDen, [Validators.required]),
        status: new FormControl("false", [Validators.required]),
      }
    );
  }

  getOldQuanLy() {
    this.quanLyService.findById(this.id).subscribe(data => {
      this.quanLy = data;
    }, error => {

    }, () => {
      this.updateForm();
    });
  }

  submit() {
    console.log("Value: ",this.quanLyForm.value);
    if (this.quanLyForm.valid) {
        const quanLy = this.quanLyForm.value;
      console.log(quanLy);
        this.quanLyService.upDate(quanLy).subscribe(() => {
          this.router.navigateByUrl('').then(() => {
            this.toastrService.success('Cập nhật thành công');
          });
        }, error => {
          console.log(error);
        });

    } else {
      this.toastrService.warning('Bạn phải nhập đúng');
    }
  }

  get email() {
    return this.quanLyForm.get('email');
  }

  get soDienThoai() {
    return this.quanLyForm.get('soDienThoai');
  }
}
