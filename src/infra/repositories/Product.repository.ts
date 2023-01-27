import { Service } from "typedi";
import { Product, IProductProps } from "../../domain/product/Product";
import { IProductRepository } from "../../domain/product/interfaces/IProduct.repository";
import { Schema, model } from 'mongoose';

export interface IProductPropsMongoose extends IProductProps {
    _id: string;
}

const productSchema = new Schema<IProductPropsMongoose>({
    _id: {type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    value: { type: Number, required: true },
    type: { type: String, required: false },
});

const ProductModel = model<IProductProps>('Product', productSchema);

@Service()
export class ProductRepository implements IProductRepository {

    public async create(product: Product): Promise<void> {
        try {
            const productModel = new ProductModel({
                _id: product.id,
                name: product.name,
                description: product.description,
                value: product.value,
                type: product.type
            });

            await productModel.save();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public async read(id: string): Promise<Product | any> {
        try {
            return await ProductModel.findById(id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public async update(id: string, product: Product): Promise<void> {
        try {
            const productModel = new ProductModel({
                name: product.name,
                description: product.description,
                value: product.value,
                type: product.type
            });

            await ProductModel.findByIdAndUpdate(id, productModel);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public async delete(id: string): Promise<void> {
        try {
            await ProductModel.findByIdAndRemove(id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public async exists(id: string): Promise<boolean> {
        try {
            return await ProductModel.findById(id) ? true : false;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public async getAll(): Promise<Product[]> {
        try {
            return await ProductModel.find();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}