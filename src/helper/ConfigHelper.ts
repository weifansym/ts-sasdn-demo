import * as LibFs from 'mz/fs';
import * as libPath from 'path';

import {TracerOptions} from './TracerHelper';

export interface ConfigOptions {
    name: string;
    host: string;
    port: number;
    enableJWT: boolean,
    enableVhost: boolean,
    enableCors: boolean,
    jwtSecret: string,
    enableGzip: boolean,
    maxAge: number,
    staticPath: string,
    compressOpt: {
        threshold: string
    },
    tracer?: boolean | TracerOptions;
}

const defaultConfigs: ConfigOptions = {
    name: 'unknown',
    host: '127.0.0.1',
    port: 8080,
    enableJWT: false,
    enableVhost: true,
    enableCors: true,
    jwtSecret: 'sasdn',
    enableGzip: true,
    maxAge: 0,
    staticPath: libPath.join(__dirname, '..', '..', 'dist', 'preview'),
    compressOpt: {
        threshold: '100kb'
    },
    tracer: false,

};

export class ConfigHelper {
    private static _instance: ConfigHelper;

    private _initialized: boolean;
    private _configs: ConfigOptions;

    public static instance(): ConfigHelper {
        if (ConfigHelper._instance === undefined) {
            ConfigHelper._instance = new ConfigHelper();
        }
        return ConfigHelper._instance;
    }

    private constructor() {
        this._initialized = false;
    }

    public async init(configPath: string): Promise<any> {
        let stats = await LibFs.stat(configPath);

        // validate file is exist
        if (!stats.isFile()) {
            throw new Error(`[Config] Invalid path, config:${configPath}`);
        }

        this._configs = ConfigHelper.mergerObject(defaultConfigs, require(configPath));
        this._initialized = true;

        return Promise.resolve();
    }

    public getOption(): ConfigOptions {
        if (!this._initialized) {
            throw new Error('[Config] Config Instance has not initialized!');
        }
        return this._configs;
    }

    public static mergerObject(object: { [key: string]: any }, newObject: { [key: string]: any }): any {
        for (let key in newObject) {
            object[key] = newObject[key];
        }
        return object;
    }
}
