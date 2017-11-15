"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_config_1 = require("../configs/exception.config");
class Exception extends Error {
    constructor(code, params = null, moduleName) {
        super();
        this.code = code;
        this.message = this.getExtMsg(code, params, moduleName);
    }
    getExtMsg(code, params = null, moduleName) {
        let message;
        if (exception_config_1.ErrorCode.hasOwnProperty(code)) {
            message = exception_config_1.ErrorCode[code];
        }
        else {
            message = `[%m]ErrorCode does not exist, Code:${code}.`;
        }
        // replace module name
        message = message.replace('%m', (moduleName) ? moduleName : exception_config_1.ModuleName);
        // replace params
        if (params != null) {
            if (typeof params != 'object') {
                params = [params];
            }
            for (let i in params) {
                message = message.replace('%s', params[i].toString());
            }
        }
        return JSON.stringify({
            code: code,
            message: message
        });
    }
    static parseErrorMsg(err) {
        try {
            return JSON.parse(err.message);
        }
        catch (e) {
            return Exception.parseErrorMsg(new Exception(10001, err.message));
        }
    }
}
exports.Exception = Exception;
//# sourceMappingURL=Exception.js.map