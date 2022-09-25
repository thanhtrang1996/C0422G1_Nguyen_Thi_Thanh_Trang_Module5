import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  choose(result :any) {
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
