import { Application } from 'egg';
import { EggShell } from 'egg-shell-decorators';
export default (app: Application) => {
  EggShell(app, {
    prefix: '/api/v1',
    quickStart: true,
  });
};
