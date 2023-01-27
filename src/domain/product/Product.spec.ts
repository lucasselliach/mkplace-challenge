import 'jest';
import { Product } from './Product';

describe('Product tests', () => {
    
    test('Checking when product has been created. It should be valid.' , async () => {
        
        const product: Product = Product.Create({
            name: 'productName',
            description: 'productDescription',
            value: 1,
            type: 'test'
        });

        expect(product).toBeTruthy();
        expect(product.name).toBeTruthy();
        expect(product.description).toBeTruthy();
        expect(product.value).toBeTruthy();
        expect(product.type).toBeTruthy();
        expect(product.id).toBeTruthy();
    });
});