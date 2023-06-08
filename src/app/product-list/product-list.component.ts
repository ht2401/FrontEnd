import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[]=[];
  productForm: any = {}; // Thêm khai báo cho productForm

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
    });
  }

  createProduct(product: any) {
    this.productService.createProduct(product).subscribe(
      (response) => {
        console.log('Sản phẩm đã được tạo thành công!');
        this.getProducts();
        this.productForm = {};
      },
      (error) => {
        console.error('Đã xảy ra lỗi khi tạo sản phẩm:', error);
      }
    );
  }
  
  updateProduct(product: any) {
    console.log(product);
    this.productService.updateProduct(product.id, product).subscribe((response) => {
      // Xử lý kết quả thành công
      console.log('Sản phẩm đã được cập nhật thành công!');
      // Gọi lại phương thức getProducts để cập nhật danh sách sản phẩm
      this.getProducts();
    }, (error) => {
      // Xử lý lỗi
      console.error('Đã xảy ra lỗi khi cập nhật sản phẩm:', error);
    });
  }

  deleteProduct(product: any) {
    this.productService.deleteProduct(product.productId).subscribe(
      () => {
        console.log('Xóa sản phẩm thành công');
        this.getProducts();
      },
      (error) => {
        console.log('Đã xảy ra lỗi khi xóa sản phẩm:', error);
      }
    );
  }
  
  
  editProduct(product: any) {
    this.productForm = {
      productId: product.productId,
      productName: product.productName,
      price: product.price,
      description: product.description,
      image: product.image
    };
  }
}
