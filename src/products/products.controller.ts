import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}
    @Post()
    addProduct(
     @Body('title') prodTitle: string,
     @Body('description') prodDesc: string,
     @Body('due_date') prodDue: string,
     ): any {

        const generatedID = this.productsService.insertProduct(prodTitle, prodDesc, prodDue);
        return { id: generatedID };
    }
    @Get()
    getAllProducts(){
        return this.productsService.getProducts();
    }
    @Get(':id')
    getProduct(@Param('id') prodId: string, ) {
        return this.productsService.getSingleProduct(prodId);
    }
    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title')prodTitle: string, 
        @Body('descipriton')prodDesc: string, 
        @Body('due_date')prodDue: string,) {
            
            this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodDue);
            return null;
        }
        @Delete(':id')
        removeProduct(@Param('id') prodId: string,){
            this.productsService.deleteProduct(prodId);
            return null;
        }
}