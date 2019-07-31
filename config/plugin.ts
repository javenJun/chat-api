import { EggPlugin } from 'egg';
const plugin: EggPlugin = {
  static: true,
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  aop: { // 需要同时开启，controller插件依赖
    enable: true,
    package: 'egg-aop',
  },
  controller: {
    enable: true,
    package: 'egg-controller',
  },
};

export default plugin;
