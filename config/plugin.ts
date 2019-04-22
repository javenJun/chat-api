import { EggPlugin } from 'egg';

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
};

export default plugin;
