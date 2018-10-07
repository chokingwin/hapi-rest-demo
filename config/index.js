const { env } = process;

module.exports = {
    port: env.PORT,
    host: env.HOST,
    jwtSecret: env.JWT_SECRET,
    wxAppid: env.WX_APPID,
    wxMchid: env.WX_MCHID,
    wxPayApiKey: env.WX_PAY_API_KEY,
};