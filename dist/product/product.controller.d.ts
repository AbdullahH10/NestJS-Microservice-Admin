import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ClientProxy } from '@nestjs/microservices';
export declare class ProductController {
    private productService;
    private readonly client;
    constructor(productService: ProductService, client: ClientProxy);
    all(): Promise<Product[]>;
    create(title: string, image: string): Promise<Product>;
    get(id: number): Promise<Product>;
    update(id: number, title: string, image: string): Promise<any>;
    delete(id: number): Promise<void>;
}
