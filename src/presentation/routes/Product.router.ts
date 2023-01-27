import { Router, Request, Response, NextFunction } from 'express';
import { ProductController } from '../controllers/Product.controller';
import Container from 'typedi';

const productController = Container.get(ProductController);

const router = Router();

router.route('^/products$')
    .get((req: Request, res: Response, next: NextFunction) => productController.getAll(req, res, next))
    .post((req: Request, res: Response, next: NextFunction) => productController.create(req, res, next));

router.route('^/products/:id')
    .get((req: Request, res: Response, next: NextFunction) => productController.read(req, res, next))
    .put((req: Request, res: Response, next: NextFunction) => productController.update(req, res, next))
    .delete((req: Request, res: Response, next: NextFunction) => productController.delete(req, res, next));

export { router as ProductRouter };
