import Koa from 'koa';
import Router from "koa-router";
import bodyParser from 'koa-bodyparser';
import user from "../route/user";
import {dbConnecter} from "../middleware";

const app = new Koa();
const router = new Router();


router.use('/user', user.routes());

app.use(dbConnecter);
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());


app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});
