const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors =require('@koa/cors');
const { execute, errorHandler } = require('graphql-api-koa');
const schema = require('./graphql/schema');
const dbInit = require('./database');

dbInit();
const app = new Koa()
    .use(cors())
    .use(errorHandler())
    .use(bodyParser())
    .use(execute({ schema }))
    .listen(4000, () => console.log('Running in port 4000'));
    