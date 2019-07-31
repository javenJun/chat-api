import { Controller } from 'egg';
import { Post, Description } from 'egg-shell-decorators';

export default class UserController extends Controller {

    @Post('/user/signup')
    @Description('用户邮箱注册')
    async signUp() {
        // const { ctx } = this;
        // const body = ctx.body;
    }
}
