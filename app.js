require('env2')('./.env')
const Hapi = require('hapi');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-world');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination');

const server = new Hapi.Server();

server.connection({
    port: config.port,
    host: config.host
});

const init = async () => {
    await server.register([
        // 为系统使用 hapi-swagger
        ...pluginHapiSwagger
    ]);
    await server.register([
        pluginHapiPagination,
    ]);
    server.route([
        ...routesHelloHapi,
        ...routesShops,
        ...routesOrders
    ]);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}

init();

