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
};

export default plugin;
