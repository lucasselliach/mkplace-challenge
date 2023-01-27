import { Entity } from "../core/Entity";

export interface IProductProps {
    name: string;
    description: string;
    value: number;
    type: string;
}

export class Product extends Entity<IProductProps> {
    get name(): string {
        return this.props.name;
    }

    get description(): string {
        return this.props.description;
    }

    get value(): number {
        return this.props.value;
    }

    get type(): string {
        return this.props.type;
    }

    private constructor(props: IProductProps, id?: string) {
        super(props, id);
    }

    public static Create(props: IProductProps, id?: string): Product {
        const entity = new Product({
            ...props
        }, id);

        return entity;
    }
}