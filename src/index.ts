import 'reflect-metadata';
import { Express } from 'express';
import { AppServer } from './infra/http/appServer';
import { DatabaseConfig } from './infra/dataBase/MongoDB';

import App from './infra/http/app';

class Bootstrap {
    static async main() {
        const app: Express = App.build()
        DatabaseConfig.connect();
        AppServer.init(app);
    }
}

Bootstrap.main();
