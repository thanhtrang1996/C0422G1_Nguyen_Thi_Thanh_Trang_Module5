import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Facility} from "../model/facility";

const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http :HttpClient) { }
  getAll():Observable<any>{
    return this.http.get(API_URL +'/facility');
  }
  saveFacility(facility):Observable<any>{
    return this.http.post(API_URL +'/facility',facility);
  }
  updateFacility(id: number, facility: Facility): Observable<any> {
    return this.http.patch(`${API_URL}/facility/${id}`,facility);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${API_URL}/facility/${id}`);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/facility/${id}`);
  }

}
