import { Service } from "typedi";
import { Product } from "../domain/product/Product";
import { IProductLogic } from "../domain/product/interfaces/IProduct.logic";
import { IProductValidation } from "../domain/product/interfaces/IProduct.validation";
import { IProductRepository } from "../domain/product/interfaces/IProduct.repository";
import { ProductValidation } from "../domain/product/validation/Product.validation";
import { ProductRepository } from "../infra/repositories/Product.repository";

@Service()
export class ProductLogic implements IProductLogic {
    private productValidation: IProductValidation;
    private productRepository: IProductRepository;
    
    constructor(productValidation: ProductValidation, productRepository: ProductRepository){
        this.productValidation = productValidation;
        this.productRepository = productRepository;
    }

    public async create(name: string, description: string, value: number, type: string): Promise<void> {
        try {
            const product: Product = Product.Create({
                name: name,
                description: description,
                value: value,
                type: type
            });

            if(this.productValidation.isValid(product)){
                await this.productRepository.create(product);
            }else{
                throw new Error('Produto não é valido');
            }
        } catch (error) {
            console.log(error);
            throw(error);
        }
    }

    public async read(id: string): Promise<Product | any> {
        try {
            return await this.productRepository.read(id);
        } catch (error) {
            console.log(error);
            throw(error)
        }
    }

    public async update(id: string, name: string, description: string, value: number, type: string): Promise<void> {
        try {
            const product: Product = Product.Create({
                name: name,
                description: description,
                value: value,
                type: type
            });

            if(this.productValidation.isValid(product)){
                await this.productRepository.update(id, product);
            }else{
                throw new Error('Produto não é valido');
            }
        } catch (error) {
            console.log(error);
            throw(error);
        }
    }

    public async delete(id: string): Promise<void> {
        try {
            await this.productRepository.delete(id);
        } catch (error) {
            console.log(error);
            throw(error)
        }
    }

    public async getAll(): Promise<Product[]> {
        try {
            return await this.productRepository.getAll();
        } catch (error) {
            console.log(error);
            throw(error)
        }
    }
}
