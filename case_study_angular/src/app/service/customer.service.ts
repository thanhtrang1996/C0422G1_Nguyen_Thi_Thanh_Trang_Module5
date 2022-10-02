import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(obj: any): Observable<any> {
    return this.http.get(API_URL + `/customer?name_like=${obj.name}&email_like=${obj.email}`);
  }

  saveCustomer(customer): Observable<any> {
    return this.http.post(API_URL + '/customer', customer);
  }

  updateCustomer(id: number, customer: Customer): Observable<any> {
    return this.http.patch(`${API_URL}/customer/${id}`, customer);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${API_URL}/customer/${id}`);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/customer/${id}`);
  }
}
