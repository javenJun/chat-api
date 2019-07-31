import { Controller } from 'egg';
import { Get, TagsAll, IgnoreJwtAll, Description, Prefix } from 'egg-shell-decorators';

@TagsAll('测试')
@IgnoreJwtAll
@Prefix('/home')
export default class HomeController extends Controller {

  @Get('/index')
  @Description('测试接口')
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
