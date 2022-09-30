import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../../model/dictionary";
import {DictionaryService} from "../../service/dictionary.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-distionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionary : Dictionary[] = [];
  temDictionary : Dictionary = {};

  constructor(private dictionaryService : DictionaryService,private router : Router) { }

  ngOnInit(): void {
    this.dictionary = this.dictionaryService.getAll();
  }
  detailDictionary( dictionary : Dictionary){
    this.temDictionary = dictionary;
    this.router.navigate(['',dictionary.id]);
  }

}
