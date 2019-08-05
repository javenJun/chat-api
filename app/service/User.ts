import { Service } from 'egg';
export default class User extends Service {
  public async signup(data: object) {
    const { ctx } = this;
    ctx.logger.info('ssssssssssss', data);
  }
}
