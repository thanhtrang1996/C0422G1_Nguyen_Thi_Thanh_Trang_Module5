import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class DiemDenService {

  constructor(private http :HttpClient) { }
  getAllDiemDen():Observable<any>{
    return this.http.get(`http://localhost:8080/quanLy/listDiemDen`)
  }
  findById(id: number):Observable<any> {
    return this.http.get(`http://localhost:8080/quanLy/diemDen/${id}`)}

}
