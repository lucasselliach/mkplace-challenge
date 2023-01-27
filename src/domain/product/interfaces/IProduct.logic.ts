import { Product } from "../Product";

export interface IProductLogic{
    create(name: string, description: string, value: number, type: string): Promise<void>;
    read(id: string): Promise<Product | any>;
    update(id: string, name: string, description: string, value: number, type: string): Promise<void>;
    delete(id: string): Promise<void>;

    getAll(): Promise<Product[]>;
}
