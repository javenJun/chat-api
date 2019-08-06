import BaseModel from './Base';
export default app => {
    const { INTEGER, DATE, STRING, TINYINT } = app.Sequelize;

    const User = BaseModel(app, 'user', {
        nickname: {
            type: STRING(32),
            unique: true,
            allowNull: false,
            comment: '用户名/昵称',
        },
        email: {
            type: STRING(64),
            unique: true,
            allowNull: true,
            comment: '邮箱地址',
        },
        phone: {
            type: STRING(20),
            unique: true,
            allowNull: true,
            comment: '手机号码',
        },
        avatar: {
            type: STRING(150),
            allowNull: true,
            comment: '头像',
        },
        firstname: {
            type: STRING(5),
            allowNull: true,
            comment: '姓',
        },
        lastname: {
            type: STRING(10),
            allowNull: true,
            comment: '名',
        },
        real_name: {
            type: STRING(30),
            allowNull: true,
            comment: '真实姓名',
        },
        signature: {
            type: STRING(255),
            allowNull: true,
            comment: '签名',
        },
        notify_count: {
            type: INTEGER(11),
            allowNull: false,
            defaultValue: 0,
            comment: '消息通知个数',
        },
        gender: {
            type: TINYINT(1),
            allowNull: false,
            defaultValue: 0,
            comment: '性别: 0:未知,1:男,2:女',
        },
        salt: {
            type: STRING(5),
            defaultValue: 0,
            allowNull: true,
            comment: '消息通知个数',
        },
        password: {
            type: STRING(255),
            allowNull: true,
            comment: '密码',
        },
        loginTime: {
            type: DATE,
            comment: '最近活跃的时间',
        },
        status: {
            type: TINYINT(1),
            allowNull: false,
            defaultValue: 1,
            comment: '用户状态:0 禁用; 1 正常;  2 封存账户',
        },
    },
    {
        paranoid: true,
    });
    return User;
};
