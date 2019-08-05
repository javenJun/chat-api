const SIGNUP_SCHEMA = {
    type: 'object',
    properties: {
        username: { type: 'string', required: true, description: '姓名' },
        password: { type: 'string', required: true, description: '密码' },
        repassword: { type: 'string', required: true, description: '确认密码' },
      },
};

const SIGNUP_RULES = {
    username: [
        { type: 'string', required: true, message: '参数只能为string' },
    ],
    password:
    [
        { type: 'string', required: true, message: '密码不能为空' },
    ],
    repassword:
    [
        { type: 'string', required: true, message: '确认密码不能为空' },
    ],
};

export {
  SIGNUP_SCHEMA,
  SIGNUP_RULES,
};
