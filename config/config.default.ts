import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_15727575702_3268';
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 32782,
    password: 'qian@1234',
    database: '',
  };
  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {};

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
