import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
    UseGuards,
  } from '@nestjs/common';
  import { ProductService } from './product.service';
  import { CreateProductDTO } from './dto/create-product.dto';
  import { Product } from './product.entity';
import { AuthGuard } from '@nestjs/passport';
  
  @Controller('product')
  export class ProductController {
    constructor(private productService: ProductService) {}
  
    @Post('create')
    // @UseGuards(AuthGuard())
    public async createProduct(
      @Body() createProductDto: CreateProductDTO,
    ): Promise<Product> {
      const product = await this.productService.createProduct(createProductDto);
      return product;
    }
  
    @Get('all')
    // @UseGuards(AuthGuard())
    public async getProducts(): Promise<Product[]> {
      const products = await this.productService.getProducts();
      return products;
    }
  
    @Get('/:productId')
    // @UseGuards(AuthGuard())
    public async getProduct(@Param('productId') productId: number) {
      const product = await this.productService.getProduct(productId);
      return product;
    }
  
    @Patch('/edit/:productId')
    // @UseGuards(AuthGuard())
    public async editProduct(
      @Body() createProductDto: CreateProductDTO,
      @Param('productId') productId: number,
    ): Promise<Product> {
      const product = await this.productService.editProduct(
        productId,
        createProductDto,
      );
      return product;
    }
  
    @Delete('/delete/:productId')
    @UseGuards(AuthGuard())
    public async deleteProduct(@Param('productId') productId: number) {
      const deletedProduct = await this.productService.deleteProduct(productId);
      return deletedProduct;
    }
  }