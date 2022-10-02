import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../../service/facility.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityForm : FormGroup;

  constructor(private facilityService :FacilityService, private router :Router) {

  }
  createFacility(){
    this.facilityForm = new FormGroup({
      name : new FormControl('',[Validators.required]),
      facilityType : new FormControl('',[Validators.required]),
      area : new FormControl('',[Validators.required]),
      maxPeople : new FormControl('',[Validators.required]),
      cost : new FormControl('',[Validators.required]),
      numberOfFloors : new FormControl('',[Validators.required]),
      status : new FormControl('',[Validators.required]),
      rentType : new FormControl('',[Validators.required]),
      img : new FormControl('',[Validators.required]),
    })
  }

  ngOnInit() {
    this.createFacility();
  }
   choose() {
    let result = $('#select').val();
    switch (result) {
      case "3":
        $("#add").css("display", "none");
        $("#add1").css("display", "none");
        $("#add2").css("display", "none");
        $("#add3").css("display", "none");
        $("#add4").css("display", "block");
        break;
      case "2":
        $("#add").css("display", "block");
        $("#add1").css("display", "block");
        $("#add2").css("display", "none");
        $("#add3").css("display", "block");
        $("#add4").css("display", "none");
        break;
      case "1":
        $("#add").css("display", "block");
        $("#add1").css("display", "block");
        $("#add2").css("display", "block");
        $("#add3").css("display", "block");
        $("#add4").css("display", "none");
        break;
    }
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility).subscribe(()=>{
      this.router.navigateByUrl('/facility/list');
    },error => {
      console.log(error);
    })
  }
}
