import * as redisClient from '../../lib/redisClient'
import * as msgpack from 'msgpack-lite'

export class Cache {
    private variance: number
    private expires: number

    constructor () {
      this.variance = 10;
      this.expires = 18000 // 5 hours = 5 * 60 * 60 seconds

    }

    async setStr(queryString: string, data: string) {
        return new Promise((resolve, reject) => {
            const result: any = redisClient.redisInstance.set(queryString, data);
            resolve(result)
        })
    }

    async getStr(queryString: string) {
        return new Promise((resolve, reject) => {
            const data: any = redisClient.redisInstance.get(queryString);
            resolve(data)
        })
    }
    async setModelHash (modelName: string, identity: string, queryString: string, data: string, expires?: number) {
        const key: string = this.genModelKey(modelName, identity)
        return new Promise((resolve, reject) => {
            redisClient.redisInstance.pipeline()
                .hset(key, queryString, msgpack.encode(data))
                .expire(key, this.genExpire(expires))
                .exec()
                .then((results: Array<[ string, number ]>) => { // results: [[null, 1], [null, 1]]
                    results.forEach((result) => { // result: [null, 1]
                        if (result[ 0 ]) {
                            reject(result[ 0 ]) // err
                        }
                    })
                    resolve(data) // data itself resolved
                })
        })
    }

    async getModelHash (modelName: string, identity: string, queryString: string) {
        return new Promise((resolve, reject) => {
            redisClient.redisInstance.hget(this.genModelKey(modelName, identity), queryString).then((data: any) => {
                if (data !== null) {
                    data = msgpack.decode(data)
                }
                resolve(data)
            }).catch((err: Error) => {
                reject(err)
            })
        })
    }

    async removeModelHash (modelName: string, identity: string) {
        return redisClient.redisInstance.del(this.genModelKey(modelName, identity))
    }

    async setExpire (key: string, expires: number) {
        return redisClient.redisInstance.expire(key, this.genExpire(expires))
    }

    genModelKey (modelName: string, identity: string) {
        return `${modelName}:${identity}`
    }

    genExpire (expires: number) {
        expires = expires || this.expires

        const varianceMin: number = 0
        const varianceMax: number = expires * 0.02 * this.variance
        const varianceMinus: number = expires * 0.01 * this.variance

        return Math.floor(expires + this.getRandomArbitrary(varianceMin, varianceMax) - varianceMinus)
    }

    getRandomArbitrary (min: number, max: number) {
        return Math.random() * (max - min) + min
    }
}


export const cacheInstance: Cache = new Cache()