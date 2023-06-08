import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerId: number = 0;
  customerName: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.hasOwnProperty('customerId')) {
        this.customerId = parseInt(params['customerId']);
        this.loadCustomer();
      }
    });
  }

  loadCustomer() {
    this.customerService.getCustomerById(this.customerId.toString()).subscribe(
      customer => {
        this.customerName = customer.customerName;
        this.email = customer.email;
        this.phone = customer.phone;
        this.address = customer.address;
      },
      error => {
        console.error('Lỗi khi tải thông tin khách hàng:', error);
      }
    );
  }

  addCustomer() {
    const newCustomer = {
      customerName: this.customerName,
      email: this.email,
      phone: this.phone,
      address: this.address
    };

    if (this.customerId) {
      this.customerService.updateCustomer(this.customerId, newCustomer).subscribe(
        response => {
          console.log('Cập nhật khách hàng thành công');
          this.router.navigate(['/customers']);
        },
        error => {
          console.error('Lỗi khi cập nhật khách hàng:', error);
        }
      );
    } else {
      this.customerService.addCustomer(newCustomer).subscribe(
        response => {
          console.log('Thêm khách hàng thành công');
          this.router.navigate(['/customers']);
        },
        error => {
          console.error('Lỗi khi thêm khách hàng:', error);
        }
      );
    }
  }
}
