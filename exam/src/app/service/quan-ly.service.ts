import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {QuanLy} from '../model/quanLy';
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class QuanLyService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get(`http://localhost:8080/quanLy/list`)
  }

  upDate(quanLy:QuanLy):Observable<any>{
    return this.http.patch(`http://localhost:8080/quanLy/update`,quanLy);
  }
  add(quanLy:QuanLy):Observable<any>{
    return this.http.post(`http://localhost:8080/quanLy/add`,quanLy);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(`http://localhost:8080/quanLy/delete/${id}`)
  }
  findById(id: number):Observable<QuanLy> {
    return this.http.get(`http://localhost:8080/quanLy/update/${id}`)}
}
