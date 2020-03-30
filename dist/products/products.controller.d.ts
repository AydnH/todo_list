import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodDue: string): any;
    getAllProducts(): import("./product.model").Product[];
    getProduct(prodId: string): {
        id: String;
        title: String;
        description: String;
        due_date: String;
    };
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodDue: string): any;
    removeProduct(prodId: string): any;
}
