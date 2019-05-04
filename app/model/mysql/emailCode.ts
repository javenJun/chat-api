import * as moment from 'moment';
import * as User from './user';

module.exports = (app: any) => {
    const { STRING, INTEGER, NOW, UUID } = app.Sequelize;
    const emailCode = app.model.define('email_code', {
        userid: {
            type: UUID,
            primaryKey: true,
            allowNull: false,
            references: {
                model: User, // 这是引用另一个模型
                key: 'id', // 这是引用模型的列名称
            },
            description: '用户uuid 也就是id',
        },
        user_selfid: {
            type: INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: User,  // 这是引用另一个模型
                key: 'selfid',   // 这是引用模型的列名称
            },
            description: '用户自增id',
        },
        email: {
            type: STRING(100), validate: { isEmail: true }, description: '邮箱',
        },
        limit: {
            type: INTEGER, defaultValue: 3, description: '邮箱的激活期限',
        },
        create_at: { type: INTEGER(11), defaultValue: moment(NOW).unix(), description: '创建时间,时间戳' },
        update_at: { type: INTEGER(11), description: '更新时间，时间戳' },
    });
    return emailCode;
};
