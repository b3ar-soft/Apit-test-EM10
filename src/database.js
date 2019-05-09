import MongoClient from "mongodb";

import { DBROUTE, DBNAME } from './config/database.config.json';

async function connect() {
    try {
        const client = await MongoClient.connect(DBROUTE, { useNewUrlParser: true });
        const db = client.db(DBNAME);
        return db;
    } catch (e) {
        console.log(e);
    }
}

export default connect;
