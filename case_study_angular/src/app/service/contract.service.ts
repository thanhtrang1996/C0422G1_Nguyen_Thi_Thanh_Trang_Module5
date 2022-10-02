import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../model/contract";

const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http : HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(API_URL + '/contract');
  }

  saveContract(contract): Observable<any> {
    return this.http.post(API_URL + '/contract', contract);
  }

  updateContract(id: number, contract: Contract): Observable<any> {
    return this.http.patch(`${API_URL}/contract/${id}`, contract);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${API_URL}/contract/${id}`);
  }

  deleteContract(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/contract/${id}`);
  }
}
