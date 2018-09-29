const { env } = process;

module.exports = {
    port: env.PORT,
    host: env.HOST
};