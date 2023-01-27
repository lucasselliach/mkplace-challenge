import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import { AppRouters } from "./api/v1";

import * as swaggerDocument from "./swagger.json";

export default class App {
    static build() {
        const app = express();
        
        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(cors({ origin: '*' }));

        AppRouters.load(app);

        return app;
    }
}
