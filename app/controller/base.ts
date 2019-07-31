import { Controller } from 'egg';
export class BaseController extends Controller {
    success(data?: any, msg: string= '成功') {
        this.ctx.body = {
          code: 0,
          msg,
          data,
        };
      }
    fail(code: number, msg: string = '未知错误') {
        this.ctx.body = {
            code,
            msg,
            data: [],
        };
    }
}
