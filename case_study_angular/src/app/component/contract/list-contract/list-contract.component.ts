import {Component, OnInit} from '@angular/core';
import {Contract} from "../../../model/contract";
import {ContractService} from "../../../service/contract.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contract: Contract[] = [];
  contractForm: FormGroup;

  constructor(private contractService: ContractService) {
    this.contractService.getAll().subscribe(data => {
      this.contract = data.content;
    })
  }

  ngOnInit() {
    this.createContract();
  }

  createContract() {
    this.contractForm = new FormGroup({
      facility: new FormControl('', [Validators.required]),
      customerName: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required]),
      total: new FormControl('', [Validators.required]),
    })
  }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.saveContract(contract).subscribe(next => {
      this.contractService.getAll().subscribe(data => {
        this.contract = data;
      })
    })
  }
}
