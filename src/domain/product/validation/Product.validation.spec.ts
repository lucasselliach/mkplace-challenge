import 'jest';
import { Product } from '../Product';
import { ProductValidation } from './Product.validation';

describe('Product validation tests', () => {
    
    test('Checking when product is valid. It should be valid.' , async () => {
        
        const product: Product = Product.Create({
            name: 'productName',
            description: 'productDescription',
            value: 1,
            type: 'test'
        });

        const productValidation = new ProductValidation();
        const isvalid = productValidation.isValid(product);

        expect(product).toBeTruthy();
        expect(productValidation).toBeTruthy();
        expect(isvalid).toBeTruthy();
    });
    
    test('Checking when product is invalid. It should be invalid. #1' , async () => {
        
        const product: Product = Product.Create({
            name: '',
            description: 'productDescription',
            value: 1,
            type: 'test'
        });

        const productValidation = new ProductValidation();
        const isvalid = productValidation.isValid(product);

        expect(product).toBeTruthy()
        expect(productValidation).toBeTruthy();
        expect(isvalid).toBeFalsy();
    });
    
    test('Checking when product is invalid. It should be invalid. #2' , async () => {
        
        const product: Product = Product.Create({
            name: 'productName',
            description: 'productDescription',
            value: -1,
            type: 'test'
        });

        const productValidation = new ProductValidation();
        const isvalid = productValidation.isValid(product);

        expect(product).toBeTruthy()
        expect(productValidation).toBeTruthy();
        expect(isvalid).toBeFalsy();
    });
});