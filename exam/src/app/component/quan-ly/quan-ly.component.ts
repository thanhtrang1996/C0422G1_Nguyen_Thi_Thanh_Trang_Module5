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

  constructor(private quanLyService: QuanLyService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllQuanLy();
  }

  getAllQuanLy() {
    this.quanLyService.getAll().subscribe(data => {
      this.quanLy = data.content;
    });
  }

  delete(id: number) {
    this.quanLyService.delete(id).subscribe(next => {
      this.toastrService.success('Xoá thành công');
      this.getAllQuanLy();
    });
  }

  getInfoToModal(quanLy: QuanLy) {
    this.deleteQuanLy = quanLy;
  }
}
