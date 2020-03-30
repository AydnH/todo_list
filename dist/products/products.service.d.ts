import { Product } from './product.model';
export declare class ProductsService {
    private products;
    insertProduct(title: string, desc: string, due_date: string): string;
    getProducts(): Product[];
    getSingleProduct(productId: string): {
        id: String;
        title: String;
        description: String;
        due_date: String;
    };
    updateProduct(productId: string, title: string, desc: string, due_date: string): void;
    deleteProduct(prodId: string): void;
    private findProduct;
}
