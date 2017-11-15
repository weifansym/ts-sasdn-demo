import * as ioredis from 'ioredis'
import * as joi from 'joi'
import * as bluebird from 'bluebird'


const joiValidate: (conf: any, schema: joi.Schema, options?: joi.ValidationOptions) => any = bluebird.promisify(joi.validate)

const redisSchema = joi.object().keys({
    host: joi.string().optional().default('127.0.0.1'),
    port: joi.number().integer().optional().default(6379),
    family: joi.number().integer().optional().valid([ 4, 6 ]).default(4),
    password: joi.string().optional(),
    db: joi.number().integer().optional().default(0)
}).optional();

export let redisInstance: ioredis.Redis;

export async function initializeClient(redisConf: any) {
    try {
        let validated: any = await joiValidate(redisConf, redisSchema);
        redisInstance = new ioredis(validated)
        console.log('init redis success')
    } catch (err) {
        console.log('init redis 异常: ', err);
    }
}
