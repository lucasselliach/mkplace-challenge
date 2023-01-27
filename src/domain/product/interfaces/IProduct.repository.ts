import { Product } from "../Product";

export interface IProductRepository {
    create(product: Product): Promise<void>;
    read(id: string): Promise<Product | any>;
    update(id: string, product: Product): Promise<void>;
    delete(id: string): Promise<void>;
    exists(id: string): Promise<boolean>;

    getAll(): Promise<Product[]>;
}
