import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
dictionary : Dictionary[] = [
  {id:1,word:'hello',mean:'Xin Chào ,Đây là từ mọ người khi gặp nhau sẽ chào nhau'},
  {id:2,word:'hot',mean:'Nóng ,Khi trời nóng và không thể chịu được thì mọi người sẽ dùng từ này. hoặc đồ ăn nóng quá cũng sẽ nói từ này'},
  {id:3,word:'cute',mean:'dễ thương ,khin gặp ai đó dễ thương hay đồ vậy gì đó dễ thương thì mọi người hãy dùng từ này'},
  {id:4,word:'apple',mean:'quả táo , đây là một loại quả, ăn rất ngon và rất tốt cho cơ thể và sức khoẻ nên mọi người hãy ăn nhiều vào'},
  {id:5,word:'dog',mean:'chó , đây là một loại động vật rất thân thiện với con người và đây là một loại động vật rất trung thành '},
]
  constructor() {
  }
  getAll(){
 return this.dictionary;
  }

  findById(id: number) {
    return this.dictionary.filter(item => item.id === id)[0];
  }
}
