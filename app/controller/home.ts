import { BaseController } from './base';
import { Get, TagsAll, IgnoreJwtAll, Description, Prefix } from 'egg-shell-decorators';

@TagsAll('测试')
@IgnoreJwtAll
@Prefix('/home')
export default class HomeController extends BaseController {

  @Get('/index')
  @Description('测试接口')
  public async index() {
    const { ctx } = this;
    try {
      const res = await ctx.service.test.sayHi('egg');
      this.success(res);
    } catch (err) {
      this.fail(-1, err);
    }
  }
}
