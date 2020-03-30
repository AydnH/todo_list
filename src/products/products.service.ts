import { Injectable, NotFoundException } from "@nestjs/common";

import { Product } from './product.model';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, desc: string, due_date: string) {
        const prodId = Math.random().toString();
        const newProduct = new Product(new Date().toString(), title, desc, due_date)
        this.products.push(newProduct);
        return prodId;
    }
    getProducts(){
        return [...this.products];
    }
    getSingleProduct(productId: string ){
        const product = this.findProduct(productId) [0];
        return {...product};
    }
    updateProduct(productId: string, title: string, desc: string, due_date: string){
        const [product, index] = this.findProduct(productId);
        const updatedProduct = { ... product};
        if (title) {
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.description = desc;
        }
        if (due_date) {
            updatedProduct.due_date = due_date;
        }
        this.products[index] = updatedProduct;
    }
    deleteProduct(prodId: string){
        const index = this.findProduct(prodId)[1];
        this.products.splice(index, 1);
    }
    private findProduct(id:string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if(!product){
            throw new NotFoundException('cunts fucked');
        }
        return [product, productIndex];
    }

}