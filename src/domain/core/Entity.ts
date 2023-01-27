import { v4 as uuidv4 } from 'uuid';

export abstract class Entity<T> {
    protected readonly _id: string;
    public readonly props: T;

    get id(): string {
        return this._id;
    }

    constructor(props: T, id?: string) {
        this._id = id ? id : uuidv4();
        this.props = props;
    }
}