import Router from 'koa-router';
import {signUp} from "../../controller/user";
import moment from 'moment';
export const user = new Router();

// user

// /user/1


const actions = [
    {
        method: "get",
        path: "/:id",
        exec: async (ctx, next) => {
            ctx.request
            ctx.body = 'GET ' + ctx.request.path;
        }
    },
    {
        method: "post",
        path: "/",
        exec: async (ctx, next) => {
            await signUp(ctx, {
                phone: ctx.request.body['phone'],
                password: ctx.request.body['password'],
                name: ctx.request.body['name'],
                birthDate: moment(ctx.request.body['birthDate'], "YYYY-MM-DD").unix(),
            });
            console.log("!");
            ctx.body = {"test":"test"};
            next();
        }
    },
]

actions.forEach(oneAction => user[oneAction.method](oneAction.path, oneAction.exec));

module.exports = user;