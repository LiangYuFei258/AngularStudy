import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 1, '这是第一个商品', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 1.99, 2.5, '这是第二个商品', ['电子产品', '硬件设备']),
    new Product(3, '第三个商品', 1.99, 3, '这是第三个商品', ['电子产品', '硬件设备']),
    new Product(4, '第四个商品', 1.99, 3.5, '这是第四个商品', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 1.99, 4, '这是第五个商品', ['电子产品', '硬件设备']),
    new Product(6, '第四个商品', 1.99, 4.5, '这是第四个商品', ['电子产品', '硬件设备']),
    new Product(7, '第五个商品', 1.99, 5, '这是第五个商品', ['电子产品', '硬件设备'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 11:11:11', '张三1', 4, '东西不错'),
    new Comment(2, 1, '2017-02-02 11:11:11', '张三2', 2, '东西不错'),
    new Comment(3, 2, '2017-02-02 11:11:11', '张三3', 1, '东西不错'),
    new Comment(4, 2, '2017-02-02 11:11:11', '张三4', 3.5, '东西不错'),
    new Comment(5, 2, '2017-02-02 11:11:11', '张三5', 2.5, '东西不错')
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id === id);
  }

  getCommentsProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId === id);
  }


}


export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}

export class Comment {

  constructor(
    public id: number,
    public productId: number,
    public timerstamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) { }

}
