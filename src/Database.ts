import {createConnection,Connection} from "typeorm";

class Database {
    public async init() {
        const connection: Connection = await createConnection(
        );
    }
}

var database = new Database()
export default database