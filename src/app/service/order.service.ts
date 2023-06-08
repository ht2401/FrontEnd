import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = '/api/orders';

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/orders/all`);
  }
}
