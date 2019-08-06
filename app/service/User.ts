import { Service } from 'egg';
import { getRandomString } from '../common/utils';
import * as md5 from 'md5';
export default class User extends Service {
  public async signup(username: string, password: string) {
    const { ctx } = this;
    const salt: string = getRandomString(5);
    ctx.logger.info(username, password);
    const saveData = {
      salt,
      username,
      password: md5(password + salt),
    };
    const res = await ctx.model.User.create(saveData);
    return res;
  }
}
