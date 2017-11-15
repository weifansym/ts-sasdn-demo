import * as LibPath from 'path';
import * as Koa from 'koa';
import * as koaBodyParser from 'koa-bodyparser';
import * as koaCors from 'koa2-cors'
import * as staticServer from 'koa-static'
import {KoaInstrumentation} from 'zipkin-instrumentation-koa';
import RouterLoader from '../router/Router';
import {ConfigHelper} from '../helper/ConfigHelper';
import {TracerHelper} from '../helper/TracerHelper';
import compressHandler from '../middleware/compressHandler';
import jwtHandler from '../middleware/jwtHandler';
import errorHandler from '../middleware/errorHandler';
import requestIdHandler from '../middleware/requestIdHandler';
import requestTimer from '../middleware/requestTimer';
import database from '../Database';
import * as redisClient from '../lib/redisClient'

// import notFoundHandler from '../middleware/notFoundHandler';

export default class GWDemo {
    private _initialized: boolean;
    public app: Koa;

    constructor() {
        this._initialized = false;
    }

    public async init(isDev: boolean = false): Promise<any> {
        const configPath = (isDev)
            ? LibPath.join(__dirname, '..', '..', 'config.dev.json')
            : LibPath.join(__dirname, '..', '..', 'config.json');

        await ConfigHelper.instance().init(configPath);
        await TracerHelper.instance().init();
        await RouterLoader.instance().init();
        const options = ConfigHelper.instance().getOption();

        await database.init();
        await redisClient.initializeClient(options.redisConfig);

        const app = new Koa();
        app.use(KoaInstrumentation.middleware(TracerHelper.instance().getTraceInfo()));


        // static files serving
        app.use(staticServer(options.staticPath, { maxage: options.maxAge || 0 }))

        // enable Access-Control-Allow-Origin
        const enableCors = options.enableCors || false
        if (enableCors === true) {
            app.use(koaCors({ origin: '*', allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH' }))
        }
        // enable Gzip
        const enableGzip = options.enableGzip || true
        if (enableGzip === true) {
            app.use(compressHandler.register(options.compressOpt))
        }

        //  add request id in app
        app.use(requestIdHandler.register())
        //  request timer
        app.use(requestTimer.register())
        // 404 handler
        //app.use(notFoundHandler.register())
        //  error handle:500
        app.use(errorHandler.register())
        //  post body parser
        app.use(koaBodyParser({formLimit: '2048kb'}));
        // add jwt if open jwt auth
        const enableJWT = options.enableJWT || false;
        if (enableJWT === true) {
            app.use(jwtHandler.register({ secret: options.jwtSecret}, []))
        }
        app.use(RouterLoader.instance().getRouter().routes());

        this.app = app;

        this._initialized = true;

        return Promise.resolve();
    }

    public start(): void {
        if (!this._initialized) {
            return;
        }

        const options = ConfigHelper.instance().getOption();
        const host = options.host;
        const port = options.port + 1;
        this.app.listen(port, options.host, () => {
            console.log(`API Gateway Start, Address: ${host}:${port}!`);
        });
    }
}