"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const LibPath = require("path");
const Koa = require("koa");
const koaBodyParser = require("koa-bodyparser");
const koaCors = require("koa2-cors");
const staticServer = require("koa-static");
const zipkin_instrumentation_koa_1 = require("zipkin-instrumentation-koa");
const Router_1 = require("../router/Router");
const ConfigHelper_1 = require("../helper/ConfigHelper");
const TracerHelper_1 = require("../helper/TracerHelper");
const compressHandler_1 = require("../middleware/compressHandler");
const jwtHandler_1 = require("../middleware/jwtHandler");
const errorHandler_1 = require("../middleware/errorHandler");
const requestIdHandler_1 = require("../middleware/requestIdHandler");
const requestTimer_1 = require("../middleware/requestTimer");
const Database_1 = require("../Database");
const redisClient = require("../lib/redisClient");
// import notFoundHandler from '../middleware/notFoundHandler';
class GWDemo {
    constructor() {
        this._initialized = false;
    }
    init(isDev = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const configPath = (isDev)
                ? LibPath.join(__dirname, '..', '..', 'config.dev.json')
                : LibPath.join(__dirname, '..', '..', 'config.json');
            yield ConfigHelper_1.ConfigHelper.instance().init(configPath);
            yield TracerHelper_1.TracerHelper.instance().init();
            yield Router_1.default.instance().init();
            const options = ConfigHelper_1.ConfigHelper.instance().getOption();
            yield Database_1.default.init();
            yield redisClient.initializeClient(options.redisConfig);
            const app = new Koa();
            app.use(zipkin_instrumentation_koa_1.KoaInstrumentation.middleware(TracerHelper_1.TracerHelper.instance().getTraceInfo()));
            // static files serving
            app.use(staticServer(options.staticPath, { maxage: options.maxAge || 0 }));
            // enable Access-Control-Allow-Origin
            const enableCors = options.enableCors || false;
            if (enableCors === true) {
                app.use(koaCors({ origin: '*', allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH' }));
            }
            // enable Gzip
            const enableGzip = options.enableGzip || true;
            if (enableGzip === true) {
                app.use(compressHandler_1.default.register(options.compressOpt));
            }
            //  add request id in app
            app.use(requestIdHandler_1.default.register());
            //  request timer
            app.use(requestTimer_1.default.register());
            // 404 handler
            //app.use(notFoundHandler.register())
            //  error handle:500
            app.use(errorHandler_1.default.register());
            //  post body parser
            app.use(koaBodyParser({ formLimit: '2048kb' }));
            // add jwt if open jwt auth
            const enableJWT = options.enableJWT || false;
            if (enableJWT === true) {
                app.use(jwtHandler_1.default.register({ secret: options.jwtSecret }, []));
            }
            app.use(Router_1.default.instance().getRouter().routes());
            this.app = app;
            this._initialized = true;
            return Promise.resolve();
        });
    }
    start() {
        if (!this._initialized) {
            return;
        }
        const options = ConfigHelper_1.ConfigHelper.instance().getOption();
        const host = options.host;
        const port = options.port + 1;
        this.app.listen(port, options.host, () => {
            console.log(`API Gateway Start, Address: ${host}:${port}!`);
        });
    }
}
exports.default = GWDemo;
//# sourceMappingURL=GWDemo.js.map