import mysql from 'mysql2';
import {database} from "../config";

export const errorHandler = async (ctx, next) => {
    console.log(ctx, next);
    try {
        await next();
    } catch (err) {
        console.log(err);
        // ctx.status = err.status || 500;
        // ctx.body = err.message;
        // ctx.app.emit('error', err);
    }
}

export const dbConnecter = (ctx, next) => {
    const dbconntect = mysql.createConnection({
        host: database.host,
        user: database.user,
        password: database.password,
        database: database.database,
    });
    ctx.db = dbconntect;
    ctx.db.connect();

    next();
};

module.export = 'middleware';