import { Component, OnInit } from '@angular/core';
import {Facility} from "../../../model/facility";
import {FacilityService} from "../../../service/facility.service";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility: Facility[] = [];

  constructor(private facilityService : FacilityService) {

  }
  ngOnInit() {
    this.facilityService.getAll().subscribe(facility =>{
      this.facility = facility;
    })
  }


  search(name: any) {
   this.facilityService.searchFacility(name).subscribe(data=>{
     this.facility = data;
   })

  }
}
