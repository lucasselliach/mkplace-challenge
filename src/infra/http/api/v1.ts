import express from 'express';
import { Express } from 'express';
import { ProductRouter } from './../../../presentation/routes/Product.router'

export class AppRouters {
    static load(app: Express) {
        try {
            const router = express.Router();
            router.use('/v1', ProductRouter);
            app.use(router);
        } catch (error) {
            console.log(error)
        }
    }
}
