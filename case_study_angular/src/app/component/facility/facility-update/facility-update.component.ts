import {Component, OnInit} from '@angular/core';
import {FacilityService} from "../../../service/facility.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Facility} from "../../../model/facility";

declare var $: any;

@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {
  facilityForm: FormGroup;
  id: number;
  facility: Facility;


  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    })
  }

  ngOnInit() {
    this.getFacility();
  }

  updateFacility() {
    this.facilityForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      facilityType: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      maxPeople: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      numberOfFloors: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
    })
  }

  getFacility() {
    this.facilityService.findById(this.id).subscribe(data => {
      this.facility = data;
    }, error => {
      console.log(error)
    }, () => {
      this.updateFacility();
    })
  }

  submit(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(id, facility).subscribe(facility => {
      this.router.navigateByUrl('/facility/list');
    },error => {
      console.log(error)
    })
  }

  choose(result: any) {
    switch (result.value) {
      case "3":
        $("#add").hide();
        $("#add1").hide();
        $("#add2").hide();
        $("#add3").hide();
        $("#add4").show();
        break;
      case "2":
        $("#add").show();
        $("#add1").show();
        $("#add2").hide();
        $("#add3").show();
        $("#add4").hide();
        break;
      case "1":
        $("#add").show();
        $("#add1").show();
        $("#add2").show();
        $("#add3").show();
        $("#add4").hide();
        break;
    }
  }


}
