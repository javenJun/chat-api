import { Controller } from 'egg';

export default class UserController extends Controller {

    async signUpEmail() {
        const { ctx, service } = this;
        const body = ctx.body;

    }
}
