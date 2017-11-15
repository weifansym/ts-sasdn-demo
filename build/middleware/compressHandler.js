"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koaCompress = require("koa-compress");
const zlib_1 = require("zlib");
class CompressHandler {
    register(opts) {
        return koaCompress({
            threshold: opts.threshold || '100kb',
            flush: zlib_1.Z_BEST_SPEED
        });
    }
}
const handler = new CompressHandler();
exports.default = handler;
//# sourceMappingURL=compressHandler.js.map