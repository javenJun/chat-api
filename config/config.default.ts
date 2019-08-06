    import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

    export default (appInfo: EggAppInfo) => {
        const config = {} as PowerPartial<EggAppConfig>;

        // override config from framework / plugin
        // use for cookie sign key, should change to your own and keep security
        config.keys = appInfo.name + '_15727575702_3268';

        config.sequelize = { // 配置
             // 数据库类型
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            // 数据库连接的用户和密码
            username: 'root',
            password: 'yujiajun1234',
            // 数据库名
            database: 'zhiqu',
            baseDir: 'nothing',
            // 是否自动进行下划线转换（这里是因为DB默认的命名规则是下划线方式，而我们使用的大多数是驼峰方式）
            underscored: true,
            // 时区，sequelize有很多自动时间的方法，都是和时区相关的，记得设置成东8区（+08:00）
            timezone: '+08:00',
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
        };
        // 参数验证
        config.validatePlus = {
            resolveError(ctx, errors) {
              if (errors.length) {
                ctx.type = 'json';
                ctx.status = 400;
                ctx.body = {
                  code: 10001,
                  err: errors,
                  msg: '参数错误',
                };
              }
            },
          };

        // config.io = {
        //     init: { },  // passed to engine.io, Egg Socket 内部默认使用 ws 引擎，uws 因为某些原因被废止。
        //     namespace: {
        //             '/': {
        //                 connectionMiddleware: [],
        //                 packetMiddleware: [],
        //             },
        //         },
        // };

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
