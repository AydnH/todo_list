"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    insertProduct(title, desc, due_date) {
        const prodId = Math.random().toString();
        const newProduct = new product_model_1.Product(new Date().toString(), title, desc, due_date);
        this.products.push(newProduct);
        return prodId;
    }
    getProducts() {
        return [...this.products];
    }
    getSingleProduct(productId) {
        const product = this.findProduct(productId)[0];
        return Object.assign({}, product);
    }
    updateProduct(productId, title, desc, due_date) {
        const [product, index] = this.findProduct(productId);
        const updatedProduct = Object.assign({}, product);
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
    deleteProduct(prodId) {
        const index = this.findProduct(prodId)[1];
        this.products.splice(index, 1);
    }
    findProduct(id) {
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new common_1.NotFoundException('cunts fucked');
        }
        return [product, productIndex];
    }
};
ProductsService = __decorate([
    common_1.Injectable()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map