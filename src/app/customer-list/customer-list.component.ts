import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getAllCustomers().subscribe(
      data => {
        this.customers = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  editCustomer(customer: any) {
    this.router.navigate(['/add-customer'], { queryParams: { customerId: customer.customerId } });
  }
  
  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(
      () => {
        console.log('Xóa khách hàng thành công');
        this.getCustomers();
      },
      error => {
        console.error('Lỗi xóa khách hàng:', error);
      }
    );
  }
}
