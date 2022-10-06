import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class DiemDiService {

  constructor(private http:HttpClient) { }
  getAllDiemDi():Observable<any>{
    return this.http.get(`http://localhost:8080/quanLy/listDiemDi`)
  }
  findById(id: number):Observable<any> {
    return this.http.get("http://localhost:8080/quanLy/diemDi/"+id)}
}
