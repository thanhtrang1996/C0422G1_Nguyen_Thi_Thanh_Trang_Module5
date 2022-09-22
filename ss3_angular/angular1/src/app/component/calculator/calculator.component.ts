import { Component, OnInit } from '@angular/core';
import {Calculator} from "./calculator";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1:number;
  number2:number;
  operand:string;

  calculator(number1:number,number2:number,operand:string) : string{
    switch (operand) {
      case "+":
        return number1 + number2 +'';
        case "-":
        return number1 - number2 + '';
        case "*":
        return number1 * number2 +'';
      case "/":
        if(number2 == 0){
          return "Cant not 0"
        }
        else {
          return number1/number2 +'';
        }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
