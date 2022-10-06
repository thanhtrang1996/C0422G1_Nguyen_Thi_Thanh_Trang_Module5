import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient) {
  }

  getAll(obj):Observable<any> {
    return this.http.get(API_URL +`/product?name_like=${obj.name}&price_like=${obj.price}`);
  }
  saveProduct(product):Observable<any>{
   return  this.http.post(API_URL +'/product',product);
  }

  updateProduct(id : number,product : Product):Observable<any> {
    return this.http.patch(`${API_URL}/product/${id}`,product);
  }
  deleteProduct(id :number) {
    return this.http.delete(`${API_URL}/product/${id}`);
  }

  findById(id: number):Observable<Product> {
    return this.http.get(`${API_URL}/product/${id}`)}
}
