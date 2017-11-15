// import "reflect-metadata";
// import {Connection, QueryBuilder, Entity} from "typeorm";
// import {Database} from "../../Database";

// export abstract class DatabaseFactory {
//     constructor() {
//     }

//     public getDefaultDriver(): string {
//         return Database.getDefaultDriver();
//     }

//     public getOtherDriver(): string {
//         return Database.getOtherDriver();
//     }

//     public getConnection(shardKey = null, driverType = Database.getDefaultDriver()): Connection {
//        return Database.instance().getConnection(shardKey, driverType)
//     }

//     public getTime() {
//        return (new Date().getTime())/1000;
//     }

//     public getTimeStamp() {
//         return Math.floor(Date.now() / 1000);
//     }

//     public async execute(cq: QueryBuilder<any>, params?: any): Promise<any> {
//         let t1 = this.getTime();
//         cq
//         let result = await cq.execute();
//         if (result.affectedRows < 1) {
//             throw new Error("affectedRows = 0");
//         }
//         let t2 = this.getTime();
//         console.log((t2 - t1).toFixed(4), cq.getSql(), params, result);
//         return result;
//     }

//     public async getOne(cq: any, params?: any): Promise<any> {
//         let t1 = this.getTime();
//         let result = await cq.getOne();
//         let t2 = this.getTime();
//         console.log((t2 - t1).toFixed(4), cq.getSql(), params, result);
//         return result;
//     }

//     public async getMany(cq: any, params?: any): Promise<any> {
//         let t1 = this.getTime();
//         let result = await cq.getMany();
//         let t2 = this.getTime();
//         console.log((t2 - t1).toFixed(4), cq.getSql(), params, result);
//         return result;
//     }
// }
