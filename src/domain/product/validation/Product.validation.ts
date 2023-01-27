import { Service } from "typedi";
import { Product } from "../Product";
import { IProductValidation } from "../interfaces/IProduct.validation";

@Service()
export class ProductValidation implements IProductValidation {

    private static isNameValid(name: string): boolean {
        return !!name !== null && name !== undefined && name !== '' && name.length < 30;
    }

    private static isDescriptionValid(description: string): boolean {
        return !!description !== null && description !== undefined && description.length < 30;
    }

    private static isValueValid(value: number): boolean {
        return !!value !== null && value !== undefined && value > 0 ;
    }

    private static isTypeValid(type: string): boolean {
        return !!type !== null && type !== undefined;
    }

    isValid(product: Product): Boolean {
        return ProductValidation.isNameValid(product.name) &&
               ProductValidation.isDescriptionValid(product.description) &&
               ProductValidation.isValueValid(product.value) &&
               ProductValidation.isTypeValid(product.type);
    }
}