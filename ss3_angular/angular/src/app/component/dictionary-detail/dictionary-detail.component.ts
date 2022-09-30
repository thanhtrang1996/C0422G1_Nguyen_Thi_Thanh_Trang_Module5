import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryService} from "../../service/dictionary.service";
import {Dictionary} from "../../model/dictionary";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
 dictionary : Dictionary ;
  constructor(private activatedRoute : ActivatedRoute,private dictionaryService : DictionaryService) {
    activatedRoute.paramMap.subscribe((paramMap : ParamMap)=>{
      const id = paramMap.get('id');
      if(id != null){
        this.dictionary = this.dictionaryService.findById(parseInt(id));
      }
    })
  }

  ngOnInit(): void {
  }

}
