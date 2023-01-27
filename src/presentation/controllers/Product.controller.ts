import { NextFunction, Request, Response } from 'express';
import { Service } from "typedi";
import { IProductLogic } from "../../domain/product/interfaces/IProduct.logic";
import { ProductLogic } from "../../application/Product.logic";

@Service()
export class ProductController {
    private productLogic: IProductLogic;

    constructor(productLogic: ProductLogic) {
        this.productLogic = productLogic; 
    }

    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body
            await this.productLogic.create(body.name, body.description, body.value, body.type);

            return res.status(201).json('ok');
        } catch (error) {
            return next(error);
        }
    }
    
    public async read(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const response = await this.productLogic.read(id);

            return res.status(response ? 200 : 204).json(response);
        } catch (error) {
            return next(error);
        }
    }
    
    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;

            const body = req.body
            await this.productLogic.update(id, body.name, body.description, body.value, body.type);

            return res.status(200).json('ok');
        } catch (error) {
            return next(error);
        }
    }

    public async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;

            await this.productLogic.delete(id);

            return res.status(200).json('ok');
        } catch (error) {
            return next(error);
        }
    }

    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await this.productLogic.getAll();

            return res.status(response ? 200 : 204).json(response);
        } catch (error) {
            return next(error);
        }
    }
}