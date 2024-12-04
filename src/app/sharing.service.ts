import { Injectable } from '@angular/core';
import { customer, Items, products } from './model';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharingService {

private  apiURL = "http://localhost:3000";

  constructor(private http:HttpClient) {}

  addCustomer(data : customer){
     return this.http.post(this.apiURL+'/customer' , data);
  }

  getAllCustomer(){
    return this.http.get<customer[]>(this.apiURL+'/customer');
  }
  getCustomer(id : string){
    return this.http.get<customer>(this.apiURL+`/customer/${id}`);
  }
  Delete(id : string){
    return this.http.delete(this.apiURL+`/customer/${id}`);
  }
  addProduct(data : products):Observable<products>{
      return this.http.post<products>(this.apiURL+'/product' , data);
  }
  getAllPRoducts():Observable<products[]>{
    return this.http.get<products[]>(this.apiURL+'/product');
  }
  deleteProduct(id:string):Observable<any>{
    return this.http.delete(this.apiURL+`/product/${id}`);
  }

}
