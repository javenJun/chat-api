import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_15727575702_3268';

    config.sequelize = { // 配置
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        password: 'yujiajun1234',
        database: 'javen',
        define: {
          schema: 'zq_',
        },
    };

    // 跨域解决
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
        domainWhiteList: [ '*' ],
    };

    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };

    // redis 缓存问题
    config.redis = {
        client: {
            port: 6379,
            host: '127.0.0.1',
            password: '',
            db: 0,
        },
    },

    config.io = {
        init: { },  // passed to engine.io, Egg Socket 内部默认使用 ws 引擎，uws 因为某些原因被废止。
        namespace: {
                '/': {
                    connectionMiddleware: [],
                    packetMiddleware: [],
                },
            },
    };
    // add your egg config in here
    config.middleware = [
    ];

    // add your special config in here
    const bizConfig = {};

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};
