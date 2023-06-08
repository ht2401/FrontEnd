import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = '/api/customers';

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/customers/all`);
  }

  getCustomerById(customerId: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/customers/get1/${customerId}`);
  }

  addCustomer(customer: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/customers/add',customer);
  }

  updateCustomer(id: number, customer: any): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/customers/update/${id}`, customer);
  }  
  

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/customers/delete/${id}`);
  }
}
