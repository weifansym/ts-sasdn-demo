import {ErrorCode, ModuleName} from '../configs/exception.config';

type ParamsType = string | number | Array<string | number>;
type ParamsTypes = Array<ParamsType>;

export class Exception extends Error {
    public name: string;
    public code: number;
    public message: string;

    public constructor(code: number, params: ParamsType | ParamsTypes = null, moduleName ?: string) {
        super();
        this.code = code;
        this.message = this.getExtMsg(code, params, moduleName);
    }

    public getExtMsg(code: number, params: ParamsType | ParamsTypes = null, moduleName ?: string) {

        let message: string;
        if (ErrorCode.hasOwnProperty(code)) {
            message = ErrorCode[code];
        } else {
            message = `[%m]ErrorCode does not exist, Code:${code}.`;
        }

        // replace module name
        message = message.replace('%m', (moduleName) ? moduleName : ModuleName);

        // replace params
        if (params != null) {
            if (typeof params != 'object') {
                params = [params];
            }

            for (let i in params as Array<any>) {
                message = message.replace('%s', params[i].toString());
            }
        }

        return JSON.stringify({
            code: code,
            message: message
        });
    }

    public static parseErrorMsg(err: Error) {
        try {
            return JSON.parse(err.message);
        } catch (e) {
            return Exception.parseErrorMsg(new Exception(10001, err.message));
        }
    }
}
