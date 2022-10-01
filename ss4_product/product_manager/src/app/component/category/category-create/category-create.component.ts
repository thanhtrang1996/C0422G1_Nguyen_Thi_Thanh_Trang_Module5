import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
categoryForm : FormGroup;
  constructor(private categoryService : CategoryService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.categoryForm = new FormGroup({
      id : new FormControl(),
      name : new FormControl()
    })
  }

  submit() {
    const categories = this.categoryForm.value;
    this.categoryService.saveCategory(categories).subscribe(()=>{
      this.categoryForm.reset();
      alert('Tạo thành công');
    },error => {
      console.log(error);
    });
  }
}
