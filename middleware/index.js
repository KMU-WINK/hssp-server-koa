import mysql from 'mysql2';
import {database} from "../config";

export const dbConnecter = (ctx, next) => {
    const dbconntect = mysql.createConnection({
        host: database.host,
        user: database.user,
        password: database.password,
        database: database.database,
    });
    ctx.db = dbconntect;
    next();
};

module.export = 'middleware';