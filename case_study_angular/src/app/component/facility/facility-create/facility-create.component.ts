import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
