import { Product } from "../Product";

export interface IProductValidation {
    isValid(product: Product): Boolean;
}
  