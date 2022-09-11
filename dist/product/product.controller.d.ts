import { ProductService } from './product.service';
import { Product } from './product.entity';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(): Promise<Product[]>;
    create(title: string, image: string): Promise<Product>;
    get(id: number): Promise<Product>;
    update(id: number, title: string, image: string): Promise<any>;
    delete(id: number): Promise<void>;
}
