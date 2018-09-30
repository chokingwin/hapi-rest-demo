// const models = require("../models");
const Joi = require('Joi');
const GROUP_NAME = 'shops';

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
            // const result = await models.shops.findAll({
            //     attributes: [
            //         'id', 'name'
            //     ]
            // });
            // reply(result);
            reply();
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺列表'
        }
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{shopId}/goods`,
        handler: async (request, reply) => {
            reply();
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺的商品列表',
        },
    },
];