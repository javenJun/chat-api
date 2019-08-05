import { Controller } from 'egg';
import { Post, Description, Parameters, Prefix, TagsAll } from 'egg-shell-decorators';
import { SIGNUP_SCHEMA, SIGNUP_RULES } from '../logic/user';

@TagsAll('')
@Prefix('/user')
export default class UserController extends Controller {

    @Post('/signup')
    @Description('用户邮箱注册')
    @Parameters([{ name: 'body', in: 'body', required: true, schema: SIGNUP_SCHEMA }])
    async signup({ body }) {
        const { ctx , service } = this;
        try {
            const validateResult = await ctx.validate(SIGNUP_RULES, body);
            if (!validateResult) return;
            if (body.password !== body.repassword) return ctx.fail(-1, '两次输入的密码不一致', '参数错误');
            const res = await service.user.signup(body);
            ctx.success(res);
        } catch (err) {
            ctx.fail(-1, err);
        }
    }
}
