import { Context } from 'egg';
import { has } from 'lodash';


export default {
    success(data?: any, msg: string = '成功') {
        const ctx: Context = this as Context;
        ctx.body = {
            code : 1,
            msg,
            data: [],
        };
        if (data) {
            has(data, 'data') ? ctx.body.data = data : ctx.body.data = data;
        }
    },
    fail(code: number = -1, msg: string= '未知错误', data?: any) {
        const ctx: any = this;
        ctx.body = {
            code,
            msg,
            data: data || [],
        };
    },
};
